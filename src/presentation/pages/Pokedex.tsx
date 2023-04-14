import styled from "styled-components";
import DetailPokemon from "../containers/DetailPokemon";
import ListPokedex from "../containers/ListPokedex";

const Wrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

type Props = {}

const Pokedex = (props: Props) => {
  return (
    <Wrapper>
        <ListPokedex />
        <DetailPokemon />
    </Wrapper>
  )
}

export default Pokedex