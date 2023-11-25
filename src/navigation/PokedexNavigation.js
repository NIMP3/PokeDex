import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PokedexScreen from '../screens/Pokedex';
import PokemonScreen from '../screens/Pokemon';

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="PokedexScreen" component={PokedexScreen} options={{ title: 'Pokedex'}} />
        <Stack.Screen name="PokemonScreen" component={PokemonScreen} options={{ title: 'Pokemon'}} />
    </Stack.Navigator>
  )
}