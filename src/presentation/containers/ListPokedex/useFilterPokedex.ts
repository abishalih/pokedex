import { useState } from "react";
import { ParamsProps } from ".";
import { FilterProps } from "../../../application/common/list";
import { PokemonProps } from "../PokemonThumbnail";

export type SetFilterProps = (id: string, value: string) => void;

export const useFilterPokedex = (data: FilterProps[] = []) => {
  const [filters, setFilters] = useState<ParamsProps>({
    limit: 9,
    name: "",
    nature: "",
    type: "",
  });
  
  const setFilter = (label: string, value: string) => {
    const id = label.toLowerCase();
    setFilters({ ...filters, [id]: value });
  }
  return { filters, setFilter };
};


export const filterPokemon = (data: Array<PokemonProps>=[], filters: ParamsProps={}, pageFrom:number=0, pageTo:number=9) => {
  console.log({pageFrom, pageTo});
  
  const result = data
    .filter(({ name }) => {
      if(filters.name){
        if(name?.toLowerCase().includes(filters?.name?.toLowerCase())) return true;
        return false
      }
      return true;
    })
    .filter(({ types }) => {
      if(filters.type){
        if(types?.map(val=>val.toLowerCase()).includes(filters.type?.toLowerCase())) return true;
        return false
      }
      return true;
    })
    .filter((_, key) => key>pageFrom)
    .filter((_, key) => key<pageTo);
  return result;
}
