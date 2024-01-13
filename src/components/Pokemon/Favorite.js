import React, { useState, useEffect } from 'react' 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5' 
import FontAwesome from 'react-native-vector-icons/FontAwesome' 
import { addPokemonFavoriteApi, isPokemonFavoriteApi} from '../../api/favorite';
 
export default function Favorite(props) {
    const { id } = props; 
    const [isFavorite, setIsFavorite] = useState(undefined);
    const [reloadCheck, setReloadCheck] = useState(false);
    const Icon = isFavorite ? FontAwesome : FontAwesome5;

    useEffect(() => {
        (async () => {
            try {
                const response = await isPokemonFavoriteApi(id);
                setIsFavorite(response);
            }
            catch {
                setIsFavorite(false); 
            }
        })();
    }, [id, reloadCheck]);

    const onReloadCheck = () => {
        setReloadCheck(prev => !prev);
    }

    const addFavorite = async  () => {
        try {
            await addPokemonFavoriteApi(id);
            onReloadCheck();
        }
        catch {
            console.log('Error al agregar a favoritos');
        }
    }

    const removeFavorite = async () => {
        console.log('Eliminar de favoritos');
    }
     
    return (
        <Icon name="heart" size={24} color="#fff" onPress={isFavorite ? removeFavorite : addFavorite } style={{marginRight: 8}}/>
    )
}