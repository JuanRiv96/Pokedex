import axios from 'axios';
import { PokemonByNameApi, InfoPokemon } from '../interfaces';

export const pokemonApiByName = async (name: string): Promise<PokemonByNameApi | undefined> => {
  try {
    const pokemonApi = await axios.get<InfoPokemon>(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    if (pokemonApi.data) {
      const result: PokemonByNameApi = {
        id: pokemonApi.data.id.toString(),
        name: pokemonApi.data.name,
        img: pokemonApi.data.sprites.other.dream_world.front_default,
        types: pokemonApi.data.types.map((el) => el.type.name),
        attack: pokemonApi.data.stats[1].base_stat.toString()
      };
      return result;
    }
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error) && error.response?.status === 404) return undefined;
    else if (axios.isAxiosError(error) && error.response?.status === 500) throw new Error();
  }
};
