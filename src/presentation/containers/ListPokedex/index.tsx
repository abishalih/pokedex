import styled from "styled-components";
import { FILTER_LIST } from "../../../application/common/list";
import LoadingPage from "../../../infrastructure/components/LoadingPage";
import Pagination from "../../../infrastructure/components/Pagination";
import SearchBar from "../../../infrastructure/components/SearchBar";
import PokemonThumbnail, { PokemonProps } from "../PokemonThumbnail";
import FilterPokedex from "./FilterPokedex";
import { filterPokemon, useFilterPokedex } from "./useFilterPokedex";
import { useListPokedex } from "./useListPokedex";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 70%;
`;
const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    grid-row-gap: 3rem;
`;

export type ParamsProps = {
  limit?: number;
  nature?: string;
  name?: string;
  type?: string;
};

const ListPokedex = () => {
  const { filters={}, setFilter } = useFilterPokedex(FILTER_LIST);
  const { listPokemon=[], isLoading, fromPage, toPage, nextPage, prevPage } = useListPokedex();
  const filteredPokemon = filterPokemon(listPokemon, filters, fromPage, toPage);
  console.log(filteredPokemon);
  
  return (
    <Wrapper>
        {isLoading?
          <LoadingPage />
        :<>
          <SearchBar placeholder="Search your pokemon" setFilter={setFilter} />
          <FilterPokedex filters={FILTER_LIST} setFilter={setFilter} />
          <Pagination nextPage={nextPage} prevPage={prevPage} />
          <Grid>
            { filteredPokemon.map((thumbnailProps:PokemonProps, key:number)=>(
              <PokemonThumbnail {...thumbnailProps} key={key} />
            )) }
          </Grid>
        </>}
    </Wrapper>
  )
}

export default ListPokedex