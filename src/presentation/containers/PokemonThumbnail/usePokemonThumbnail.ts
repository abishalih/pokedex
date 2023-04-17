import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { PokemonProps } from ".";
import { API_POKEMON } from "../../../application/common/api";
import { PokemonContext } from "../../../infrastructure/components/Context";
import { DetailProps } from "../../../infrastructure/service/pokedex";

const usePokemonThumbnail = ({complete, ...props}:PokemonProps) => {
    const { pokemon, setPokemon } = useContext(PokemonContext);
    const { id } = pokemon;
    const [isLoading, setLoading] = useState<boolean>(false);
    const [pokemonData, setPokemonData] = useState<PokemonProps>(props);
    const handleClick = (selectedId?: number) => {
        setPokemon({...pokemon, id: selectedId})
    };
    
    useEffect(() => {
        const getDetailPokemon = async (pokemonId?:number) => {
            try {
                await setLoading(true)
                const { data } = await axios.get(`${API_POKEMON}/${pokemonId}`);
                const result:DetailProps = await data.results?data.results:data;
                await setPokemonData( {...result, types: result.types?.map(({ type })=> type?.name || "")});
                setLoading(false)
            } catch (error) {
                console.error('Failed to fetch options', error);
                setLoading(false)
            }
        };
        
        if(complete && id) getDetailPokemon(id);
        if(!complete && props.id!==pokemonData.id) getDetailPokemon(props.id);
    }, [complete, id, props.id])
    return { ...pokemonData, complete, handleClick, isLoading };
}

export default usePokemonThumbnail;
