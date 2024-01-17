import { View, Text, Button, StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function NoLogged() {
    const navigation = useNavigation()
    return (
        <View style={styles.content}>
            <Icon name="exclamation-triangle" size={50} color="#ccc" />
            <Text style={styles.text}>Para ver tus favoritos debes estar logueado</Text>
            <Button title="Ir al login" onPress={() => navigation.navigate('Account')} />
        </View>
    )
}

const styles = StyleSheet.create({
    content: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20
    }
})
