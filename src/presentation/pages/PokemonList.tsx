import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { POKEMON_TYPE_COLOR } from '../../application/common/colors';
import { getPokemonDetails, getPokemonList } from '../../infrastructure/service/api';
import { titleCase } from '../../infrastructure/utils/sentenceCase';

interface SpritesProps {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
}

interface TypeProps {
  slot?: boolean;
  type?: {
    name:string;
  };
}
interface PokemonProps {
  complete?: boolean;
  id?: number;
  name?: string;
  order?: number;
  sprites?: SpritesProps;
  types?: Array<TypeProps>;
  url?: string;
}

const Container = styled.div`
  width: 100%;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  li {
    margin: 12px 0;
    a{
      color: black;
      text-decoration: none;
    }
  }
`;
const ListItem = styled.div`
  background-color: #FFF;
  &:hover{
    background-color: #DDD;
  }
`;
const Thumbnail = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 2fr 5fr;
  div{
    p{
      margin: 5px 0;
      font-size: 12px;
    }
  }
`;
const ThumbnailTypes = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
`;
const PokemonType = styled.div<{ type?: string }>`
  background: ${({ type = "" }) => POKEMON_TYPE_COLOR[type]};
  align-items: center;
  border: 1px solid gray;
  border-radius: 1rem;
  justify-content: center;
  padding: .25rem .75rem;
`;

const SearchBar = styled.input`
  margin-bottom: 16px;
  padding: 8px;
`;

interface PokemonThumbnailProps {
  name: string;
  filter?:string;
}

const PokemonThumbnail: React.FC<PokemonThumbnailProps> = ({ filter="", name }) => {
  const [pokemon, setPokemon] = useState<PokemonProps | null>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const details = await getPokemonDetails(name);
      setPokemon(details);
    };

    fetchPokemonDetails();
  }, [name]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }
  
  const filteredPokemonList = !filter || pokemon.types?.some((type) => type.type?.name?.toLowerCase().includes(filter.toLowerCase()));
  if(filteredPokemonList) return (
    <Link to={`/pokemon/${pokemon.name}`}>
      <ListItem>
        <Thumbnail>
            <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
            <div>
              <p>#{pokemon.id}</p>
              <p>{ titleCase(pokemon.name)}</p>
              <ThumbnailTypes>
                {pokemon.types?.map(({type}, key)=>(
                  <PokemonType key={key} type={type?.name}>{ titleCase(type?.name)}</PokemonType>
                ))}
              </ThumbnailTypes>
            </div>
        </Thumbnail>
      </ListItem>
    </Link>
  );
  return null
};

const PokemonList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<PokemonProps[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('');
  
  useEffect(() => {
    fetchPokemonList();
  }, []);

  const fetchPokemonList = async () => {
    try {
      const list = await getPokemonList();
      setNextUrl(list.next);
      setPokemonList(list.results);
    } catch (error) {
      console.error('Error fetching Pokémon list:', error);
    }
  };

  const fetchMorePokemon = async () => {
    try {
      if (nextUrl) {
        const response = await fetch(nextUrl);
        const data = await response.json();
        setNextUrl(data.next);
        setPokemonList((prevList) => [...prevList, ...data.results]);
      }
    } catch (error) {
      console.error('Error fetching more Pokémon:', error);
    }
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <Container >
      <SearchBar type="text" placeholder="Search Pokémon" value={filter} onChange={handleFilterChange} />
      <InfiniteScroll
        dataLength={pokemonList.length}
        next={fetchMorePokemon}
        hasMore={!!nextUrl}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more Pokémon to load.</p>}
        scrollableTarget="scrollableDiv" // Set the ID of the scrollable container
      >
        <List>
          {pokemonList.map((pokemon: PokemonProps) => (
            <li key={pokemon.name}>
              <PokemonThumbnail name={pokemon.name || ''} filter={filter} />
            </li>
          ))}
        </List>
      </InfiniteScroll>
    </Container>
  );
};

export default PokemonList;
