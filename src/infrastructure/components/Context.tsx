import React, { createContext, useState } from "react";
import { PokemonProps } from "../../presentation/containers/PokemonThumbnail";

// Create a context for the loading state and the PokemonProps data
export const PokemonContext = createContext<{
  pokemon: PokemonProps;
  setPokemon: (pokemon: PokemonProps) => void;
}>({
  pokemon: {},
  setPokemon: () => {}
});

// Create a provider component to wrap around the children components
export const PokemonProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [pokemon, setPokemon] = useState<PokemonProps>({});

  const setPokemonData = (pokemonData: PokemonProps) => {
    setPokemon(pokemonData);
  };
  
  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        setPokemon: setPokemonData
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
