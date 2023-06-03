import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemonList = async () => {
  const response = await axios.get(`${BASE_URL}/pokemon`);
  return response.data;
};

export const getPokemonDetails = async (pokemonName: string) => {
  const response = await axios.get(`${BASE_URL}/pokemon/${pokemonName}`);
  return response.data;
};