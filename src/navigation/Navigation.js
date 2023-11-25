import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AccountNavigation from './AccountNavigation';
import FavoriteNavigation from './FavoriteNavigation';
import PokedexNavigation from './PokedexNavigation';

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Favorite" component={FavoriteNavigation} options={
          {
            tabBarLabel: 'Favoritos',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="heart" color={color} size={size} />
            ),
          }
        }/>
        <Tab.Screen name="Pokedex" component={PokedexNavigation} title="Pokedex" options={
          {
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: () => renderPokeball()
          }
        
        } />
        <Tab.Screen name="Account" component={AccountNavigation} title="Account" options={
          {
            tabBarLabel: 'Mi cuenta',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" color={color} size={size} />
            ),
          }
        } />
    </Tab.Navigator>
  )
}

function renderPokeball() {
  return <Image source={require('../assets/pokeball.png')} style={{ width: 75, height: 75, top: -15}} />
}