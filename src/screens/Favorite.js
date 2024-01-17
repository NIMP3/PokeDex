import { View, Text, Button } from 'react-native'
import React, {useState, useCallback  } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { getPokemonFavoriteApi } from '../api/favorite'
import { getPokemonDetailsByIdApi } from '../api/pokemon'
import useAuth from '../hooks/useAuth'
import PokemonList from '../components/PokemonList'
import NoLogged from '../components/NoLogged'

export default function Favorite() {
  const [pokemons, setPokemons] = useState([]) 
  const { auth } = useAuth()

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonFavoriteApi(); 
          const pokemonsArray = [];
   
          for await (const id of response) {
            const pokemonDetail = await getPokemonDetailsByIdApi(id); 
            pokemonsArray.push({
              id: pokemonDetail.id,
              name: pokemonDetail.name,
              type: pokemonDetail.types[0].type.name,
              order: pokemonDetail.order,
              image: pokemonDetail.sprites.other["official-artwork"].front_default,
            });
          }
  
          setPokemons([...pokemons, ...pokemonsArray]);
        })()
      } 
    }, [auth])
  ) 

  return !auth  ? ( <NoLogged/> ) : ( <PokemonList pokemons={pokemons} />  ); 
}