import { useEffect, useState } from "react";
import { getListPokemon } from "../../../infrastructure/service/pokedex";
import { PokemonProps } from "../PokemonThumbnail";


export const useListPokedex = () => {
  const [fromPage, setFrom] = useState<number>(0);
  const [toPage, setTo] = useState<number>(9);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [listPokemon, setList] = useState<Array<PokemonProps>>([]);
  const prevPage = () =>{
    if(fromPage>0 && fromPage>=9) setFrom(fromPage-9)
    if(toPage>=9)setTo(toPage-9)
  }
  const nextPage = () =>{
    if(toPage<listPokemon.length) setTo(toPage+9)
    setFrom(fromPage+9)
  }
  useEffect(() => {
    const fetchData = async () => {
      const result = await getListPokemon(setLoading);
      setList(result);
    };
    fetchData();
  }, []);

  return { listPokemon, isLoading, setLoading, prevPage, fromPage, nextPage, toPage };
};
