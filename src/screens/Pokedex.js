import { SafeAreaView, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import { getPokemonsApi } from '../api/pokemon'

export default function Pokedex() {
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    const response = await getPokemonsApi();
    console.log(response);
  }
  
  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  )
}