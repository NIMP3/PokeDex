import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import getColorByPokemonType from '../../utils/getColorByPokemonType'

export default function Header(props) {
    const { name, order, image, type } = props;
    const pokemonColor = getColorByPokemonType(type);

    const bgStyle = [{ backgroundColor: pokemonColor, ...styles.bg }]


    return (
        <>
            <View style={bgStyle} />
            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.titleName}>{name}</Text>
                    <Text style={styles.order}>#{`${order}`.padStart(3,0)}</Text>
                </View>
                <View style={styles.contentImg}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
            </SafeAreaView>
        </>
    )
}

export const styles = StyleSheet.create({ 
    bg: {
        width: '100%',
        height: 400,
        position: 'absolute',
        borderBottomLeftRadius: 300,
        borderBottomRightRadius: 300,
        transform: [ { scaleX: 2 }]
    },
    content: {
        marginHorizontal: 20,
        marginTop: 80,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleName: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    order: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    contentImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 30
    },
    image: {
        width: 250,
        height: 300,
        resizeMode: 'contain',
    },
})