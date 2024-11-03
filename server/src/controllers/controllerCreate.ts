import { Pokemon } from '../models/Pokemon';
import { Type } from '../models/Type';
import { CreateTypes } from '../interfaces';
import { ClientError } from '../utils/errors';

export const createPokemon = async (data: CreateTypes): Promise<{ message: string }> => {
  const { name, hp, attack, defense, speed, height, weight, img, types } = data;
  let [pokemonCreate, created] = await Pokemon.findOrCreate({
    where: {
      name: name
    },
    defaults: {
      hp: hp,
      attack: attack,
      defense: defense,
      speed: speed,
      height: height,
      weight: weight,
      img: img
    }
  });
  if (created === false) {
    throw new ClientError(`The pokemon with name ${name} has already been created`);
  }
  let type = await Type.findAll({
    where: {
      name: types
    }
  });
  pokemonCreate.$add('Type', type);
  return { message: 'Pokemon created successfully' };
};
