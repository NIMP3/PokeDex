import AsyncStorage from '@react-native-async-storage/async-storage';
import { includes, pull } from "lodash";  
import { FAVORITE_STORAGE } from "../utils/constants";

export async function addPokemonFavoriteApi(id) {
    try {
        const favorites = await getPokemonFavoriteApi(); 
        favorites.push(id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
    }
    catch (error) {
        console.log(error);
    }
}

export async function getPokemonFavoriteApi() {
    try {
        const favorites = await AsyncStorage.getItem(FAVORITE_STORAGE); 
        return JSON.parse(favorites || "[]");  
    }
    catch (error) {
        console.log(error);
        return [];
    }
}

export async function isPokemonFavoriteApi(id) {
    try {
        const favorites = await getPokemonFavoriteApi(); 
        return includes(favorites, id);
    }
    catch (error) {
        console.log(error);
        return false;
    }
}

export async function removePokemonFavoriteApi(id) {
    try {
        const favorites = await getPokemonFavoriteApi(); 
        pull(favorites, id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
    }
    catch (error) {
        console.log(error);
    }
} 