import { View, Text, Button } from 'react-native'
import React from 'react'
import { getPokemonFavoriteApi } from '../api/favorite'

export default function Favorite() {
  const getFavorites = async () => {
    const response = await getPokemonFavoriteApi();
    console.log(response);
  }  

  return (
    <View>
      <Text>Favoritos</Text>
      <Button title='Obtener favoritos' onPress={getFavorites} />
    </View>
  )
}