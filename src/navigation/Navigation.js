import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Account from '../screens/Account';
import Favorite from '../screens/Favorite';
import Pokedex from '../screens/Pokedex';

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Favorite" component={Favorite} options={
          {
            tabBarLabel: 'Favoritos',
            tabBarIcon: ({ color, size }) => (
              <Icon name="heart" color={color} size={size} />
            ),
          }
        }/>
        <Tab.Screen name="Pokedex" component={Pokedex} title="Pokedex" options={
          {
            tabBarLabel: '',
            tabBarIcon: () => renderPokeball(),
          }
        
        } />
        <Tab.Screen name="Account" component={Account} title="Account" options={
          {
            tabBarLabel: 'Mi cuenta',
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