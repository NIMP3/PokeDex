import { SafeAreaView, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon'
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    const response = await getPokemonsApi();
    const pokemonsArray = [];

    for await (const pokemon of response.results) {
      const pokemonDetail = await getPokemonDetailsByUrlApi(pokemon.url);
      pokemonsArray.push({
        id: pokemonDetail.id,
        name: pokemonDetail.name,
        types: pokemonDetail.types[0].type.name,
        order: pokemonDetail.order,
        image: pokemonDetail.sprites.other["official-artwork"].front_default,
      });
    }

    setPokemons([...pokemons, ...pokemonsArray]);
  }
  
  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons}/>
    </SafeAreaView>
  )
}