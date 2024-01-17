import React, {useState, useCallback} from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { useFocusEffect  } from '@react-navigation/native';
import { size } from 'lodash';
import useAuth from '../../hooks/useAuth'
import { getPokemonFavoriteApi } from '../../api/favorite'

export default function UserData() {
  const { auth, logout } = useAuth();
  const [totalFavorites, setTotalFavorites] = useState( 0); 

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getPokemonFavoriteApi();
          setTotalFavorites(size(response));
        }
        catch {
          setTotalFavorites(0);
        }
      })();
    }, [])
  );

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.title}>{`${auth.firstname} ${auth.lastname}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${auth.firstname} ${auth.lastname}`}/>
        <ItemMenu title="Username" text={auth.username} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Total Favoritos" text={`${totalFavorites} Pokemons`} />
      </View>

      <View style={styles.btnLogout}>
        <Button title="Desconectarse" onPress={logout}/>
      </View>
    </View>
  )
}

function ItemMenu(props) {
  const { title, text} = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}: </Text>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  dataContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  itemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemMenuTitle: {
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120,
  },
  btnLogout: {
    marginTop: 40,
  }
})