import axios from "axios";
import { API_POKEMON } from "../../application/common/api";
import { PokemonProps } from "../../presentation/containers/PokemonThumbnail";

export async function getListPokemon(setLoading:(isLoading:boolean)=>void) {
    try {
        setLoading(true)
        const { data } = await axios.get(`${API_POKEMON}?limit=100000&offset=0`);
        const res: Array<PokemonProps> = data.results ? data.results : data || [];
        const result: Array<PokemonProps> = await Promise.all(res.map(({ url = "" }) => getDetailPokemon(url))).finally(()=>setLoading(false));
        return result.map((list, order)=>({...list, order}));
    } catch (error) {
        console.error("Failed to fetch options", error);
        return [];
    }
};

type TypesProps = {
    slot?: number;
    type?: {
      name?: string;
      url?: string;
    };
  };
export type DetailProps = {
    complete?: boolean;
    id?: number;
    name?: string;
    url?: string;
    types?: Array<TypesProps>;
  };
  
export async function getDetailPokemon(url:string=  ""){
    try {
        const { data } = await axios.get(url);
        const result:DetailProps = await data.results?data.results:data;
        return {...result, types: result.types?.map(({ type })=> type?.name)}
    } catch (error) {
        console.error("Failed to fetch options", error);
        return {};
    }
};