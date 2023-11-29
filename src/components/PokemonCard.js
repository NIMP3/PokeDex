import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function PokemonCard(props) {
    const {pokemon} = props;
    const goToPokemon = () => {
        console.log(`Go to pokemon: ${pokemon.name}`);
    }

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.pokemonCard}>
                <View style={styles.spacing}>
                    <View style={styles.bgStyles}>
                        <Image source={{uri: pokemon.image}} style={styles.image} />
                        <Text style={styles.number}>#{`${pokemon.order}`.padStart(3,0)}</Text>
                        <Text style={styles.name}>{pokemon.name}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    pokemonCard: {
        backgroundColor: '#f9f9f9',
        flex: 1,
        height: 130,
    },
    spacing: {
        flex: 1,
        padding: 10,
    },
    bgStyles: {
        backgroundColor: 'grey',
    },
    number: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: 'white',
        fontSize: 16,
    },
    name: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        padding: 5,
    },
    image: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 100,
        height: 100,
    },
})