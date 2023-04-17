import styled from "styled-components";
import { POKEMON_TYPE_COLOR } from "../../../application/common/colors";
import LoadingPage from "../../../infrastructure/components/LoadingPage";
import { convertSentenceCase } from "../../../infrastructure/utils/sentenceCase";
import PokemonStat from "./PokemonStat";
import usePokemonThumbnail from "./usePokemonThumbnail";

export type PokemonProps = {
  complete?: boolean;
  id?: number;
  name?: string;
  order?: number;
  types?: Array<string>;
  url?: string;
};

const Wrapper = styled.div<{ complete?: boolean }>`
  align-items: center;
  cursor: ${(props) => (props.complete ? "default" : "pointer")};
  display: flex;
  background-color: white;
  border: 1px solid transparent;
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  margin-top: ${(props) => (props.complete ? "3.5rem" : 0)};
  padding: 1rem;
  padding-top: 2.5rem;
  position: relative;
  &:hover{
    border: ${(props) => (props.complete ? "1px solid transparent" : "1px solid green")};
  }
`;

const PokemonImage = styled.img<{ complete?: boolean }>`
  position: absolute;
  top: ${(props) => (props.complete ? "-75px" : "-50px")};
  width: ${(props) => (props.complete ? "150px" : "100px")};
`;

const PokemonName = styled.h1`
  font-size: 22px;
  font-weight: 700;
  text-align: center;
`;

const PokemonTypes = styled.div<{ types?: Array<string> }>`
  align-items: center;
  display: grid;
  grid-gap: .5rem;
  grid-template-columns: ${({types=[]}) => (types.length===3 ? "1fr 1fr 1fr" : types.length===2 ? "1fr 1fr" : "1fr")};
  justify-content: center;
`;

const PokemonType = styled.div<{ type?: string }>`
  background: ${({ type = "" }) => POKEMON_TYPE_COLOR[type]};
  align-items: center;
  border: 1px solid gray;
  border-radius: 1rem;
  display: grid;
  justify-content: center;
  padding: .75rem 1.5rem;
`;

const PokemonThumbnail = (props: PokemonProps) => {
  const { complete = false, handleClick, id, isLoading, name = "", types = [], ...stats } = usePokemonThumbnail(props) 
  return (
    <Wrapper complete={complete} onClick={()=>handleClick(id)}>
      {isLoading?
        <LoadingPage />
      :<>
        <PokemonImage complete={complete} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
        <PokemonName>{convertSentenceCase(name)}</PokemonName>
        <PokemonTypes types={types}>
          {types.map((pokemonType: string = "", key: number) => (
            <PokemonType key={key} type={pokemonType.toLowerCase()}>{convertSentenceCase(pokemonType)}</PokemonType>
          ))}
        </PokemonTypes>
        <PokemonStat {...stats} complete={complete} />
      </> }
    </Wrapper>
  );
};

export default PokemonThumbnail;
