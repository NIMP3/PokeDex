import { StyleSheet, TextInput, Button, Keyboard, View, Text } from 'react-native'
import React, {useState} from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { user, userDetails } from '../../utils/userDB'
import useAuth from '../../hooks/useAuth'

export default function LoginForm() {
  const [error, setError] = useState("");
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (values) => {
      const { username, password } = values
      if (user.username === username && user.password === password) {
        login(userDetails)
        setError('')
      }
      else {
        setError('Usuario o contraseña incorrectos')
      }
    }
  });

  return (
    <View>
        <Text style={styles.title}>Iniciar sesión</Text>
        <TextInput 
          placeholder='Nombre de usuario' 
          style={styles.input}  
          autoCapitalize='none' 
          value={formik.values.username}
          onChangeText={(text) => formik.setFieldValue('username', text)}
        />

        <TextInput 
          placeholder='Contraseña' 
          style={styles.input} 
          secureTextEntry={true} 
          autoCapitalize='none'
          value={formik.values.password}
          onChangeText={(text) => formik.setFieldValue('password', text)}  
        />
        
        <View style={styles.btnForm}>
          <Button title='Entrar' onPress={formik.handleSubmit}/>
        </View>

        <Text style={styles.error}>{formik.errors.username}</Text>
        <Text style={styles.error}>{formik.errors.password}</Text>
        <Text style={styles.error}>{error}</Text>
    </View>
  )
}

function initialValues() {
    return {
        username: '',
        password: '',
    }
}

function validationSchema() {
    return {
        username: Yup.string().required("El nombre de usuario es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria"),
    }
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
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 20,
    },
    btnForm: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    }
})