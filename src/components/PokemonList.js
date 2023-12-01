import { StyleSheet, ActivityIndicator, FlatList, Platform } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard';

export default function PokemonList(props) {
    const {pokemons, loadPokemons, isNext} = props;
    const loadMorePokemons = () => {
        loadPokemons();
    }

    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false} 
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({item}) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.flatListContentContainer}
            onEndReached={isNext && loadMorePokemons}
            onEndReachedThreshold={0.1}
            ListFooterComponent={isNext && (<ActivityIndicator size="large" style={styles.spiner} color='#AEAEAE' />)}
        />
    )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginTop: Platform.OS === 'ios' ? 0 : 30,
    },
    spiner: {
        marginTop: 20,
        marginBottom: Platform.OS === 'ios' ? 60 : 90,
    }
})