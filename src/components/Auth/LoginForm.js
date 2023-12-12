import { StyleSheet, TextInput, Button, Keyboard, View, Text } from 'react-native'
import React from 'react'

export default function LoginForm() {
  return (
    <View>
        <Text style={styles.title}>Iniciar sesión</Text>
        <TextInput placeholder='Nombre de usuario' style={styles.input}  autoCapitalize='none'/>
        <TextInput placeholder='Contraseña' style={styles.input} secureTextEntry={true} autoCapitalize='none'/>
        <Button title='Entrar' onPress={Keyboard.dismiss}/>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
    },
})