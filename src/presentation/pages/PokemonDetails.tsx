import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { POKEMON_TYPE_COLOR } from '../../application/common/colors';
import { getPokemonDetails } from '../../infrastructure/service/api';
import { titleCase } from '../../infrastructure/utils/sentenceCase';

interface RouteParams extends Record<string, string> {
  name: string;
}

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

const Thumbnail = styled.div`
  background-color: white;
  align-items: center;
  display: grid;
  grid-template-columns: 2fr 5fr;
  div{
    p{
      margin: 12px 0;
      font-size: 18px;
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
  margin: 12px 0;
`;
const PokemonDetails: React.FC = () => {
  const { name = '' } = useParams<RouteParams>();
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

  return (
    <div>
      <Thumbnail>
        <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
        <div>
          <p>#{pokemon.id} | { titleCase(pokemon.name)}</p>
          <ThumbnailTypes>
            {pokemon.types?.map(({type}, key)=>(
              <PokemonType key={key} type={type?.name}>{ titleCase(type?.name)}</PokemonType>
            ))}
          </ThumbnailTypes>
        </div>
      </Thumbnail>
    </div>
  );
};

export default PokemonDetails;
