import styled from "styled-components";
import PokemonThumbnail from "./PokemonThumbnail";

const Wrapper = styled.div`
    width: 30%;
`;
const DetailPokemon = () => {
  return (
    <Wrapper>
        <PokemonThumbnail complete/>
    </Wrapper>
  )
}

export default DetailPokemon