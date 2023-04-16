import styled from "styled-components";
import { PokemonProvider } from "../../infrastructure/components/Context";
import DetailPokemon from "../containers/DetailPokemon";
import ListPokedex from "../containers/ListPokedex";

const Wrapper = styled.div`
    display: flex;
    gap: 2rem;
`;

type Props = {}

const Pokedex = (props: Props) => {
  return (
    <PokemonProvider>
      <Wrapper>
        <ListPokedex />
        <DetailPokemon />
      </Wrapper>
    </PokemonProvider>
  )
}

export default Pokedex