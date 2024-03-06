import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import Splash from './Splash';
import Icons from '../components/HomeComp/Icons';
import { useNavigation } from 'expo-router';
import { Asset, useAssets } from 'expo-asset';
import { getPerfilFromUid } from '../connections_miguel/firebase-store';
import { useState, useEffect } from 'react';
import { emailLogin, auth, createUser, signOutFirebase } from "../connections_miguel/firebase-auth";
import TabBar from '../components/TabBarComp';
export default function Home() {

  const logo = require('../assets/images/logos/logoVirada.png');
  const imgpresocraticos = require('../assets/images/logos/presocraticos.png');
  const imgclassicos = require('../assets/images/logos/classicos.png');
  const imghelenisticos = require('../assets/images/logos/helenisticos.png');
  const imgEstudantes = require('../assets/images/logos/EstudantesAprendendo.png');


  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    getPerfilFromUid(auth.currentUser.uid).then((perfil) => {
      setPerfil(perfil);
    })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  const nav = useNavigation();
  const [assets, error] = useAssets([require('../assets/images/filosofos/anaximandro.png'), require('../assets/images/filosofos/anaximenes.png'),
  ])
  const [fontsLoaded] = useFonts({
    'LisuBosa-Regular': require('../assets/fonts/LisuBosa-Regular.ttf'),
    'PlayfairDisplay-Black': require('../assets/fonts/Playfair_Display/PlayfairDisplay-Black.ttf'),
    'Comfortaa-Regular': require('../assets/fonts/Comfortaa/Comfortaa-Regular.ttf'),
    'Comfortaa-Bold': require('../assets/fonts/Comfortaa/Comfortaa-Bold.ttf'),
    'Comfortaa-Light': require('../assets/fonts/Comfortaa/Comfortaa-Light.ttf'),
    'LilitaOne-Regular': require('../assets/fonts/LilitaOne-Regular.ttf'),
  });

  if (fontsLoaded && assets) {

    return (
      <View style={styles.container}>

        <StatusBar barStyle="light-content" backgroundColor="#131F24" />

        <View style={styles.superior}>
          <Text style={styles.nomeApp}>Filosofando</Text>
        </View>

        <Text style={styles.olaTexto}>Olá, {perfil && perfil.username}</Text>

        <ScrollView>

          <TouchableOpacity onPress={() => nav.navigate('Summary')}>
            <View style={styles.boasVindas}>
              <Text style={styles.gostarAprender}>O que você gostaria{'\n'}de aprender{'\n'}hoje?</Text>
              <Text style={styles.botaoIniciarTexto}>Começar</Text>
            </View>
            <Image source={imgEstudantes} style={styles.imgEstudantes} />
          </TouchableOpacity>

          <Text style={styles.olaTexto}>Escolhido para você</Text>

          <View style={styles.centro}>

            <TouchableOpacity onPress={() => nav.navigate('Unit')}>
              <View style={styles.esquerda}>
                <Text style={styles.txtGEsquerda}>Unidade 1</Text>
                <Text style={styles.txtMEsquerda}>Os pré-socráticos</Text>
                <Image source={imgpresocraticos} style={styles.preImg} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => nav.navigate('About')}>
              <View style={styles.direita}>
                <Text style={styles.txtGDireita}>Conheça {'\n'} o app</Text>
                <Image source={logo} style={styles.logo} />
              </View>
            </TouchableOpacity>

          </View>

        </ScrollView>

        <TabBar />

      </View>
    );
  }
  else {
    return <Splash />
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    // width: "100%",
    //backgroundColor: '#5271FF',
    backgroundColor: '#131F24',
  },

  superior: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },

  nomeApp: {
    fontFamily: 'LilitaOne-Regular',
    color: 'white',
    fontSize: 27,
  },

  olaTexto: {
    marginTop: 20,
    fontSize: 25,
    color: 'white',
    fontFamily: 'Comfortaa-Bold',
    paddingLeft: 20,
  },

  imgEstudantes: {
    width: 150,
    height: 150,
    marginTop: 52,
    marginLeft: 190,
    position: 'absolute',
  },

  boasVindas: {
    marginHorizontal: 30,
    marginTop: 30,
    padding: 10,
    paddingTop: 15,
    paddingBottom: 100,
    backgroundColor: '#1f3892',
    borderRadius: 10,
  },

  gostarAprender: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Comfortaa-Light',
  },

  botaoIniciarTexto: {
    color: '#1f3892',
    fontSize: 20,
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 10,
    position: 'absolute',
    paddingVertical: 5,
    paddingHorizontal: 25,
    top: 100,
    left: 20,
  },

  centro: {
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 60,
    marginTop: 50,
    flexDirection: 'row',
  },

  esquerda: {
    marginLeft: 20,
    backgroundColor: '#1f3892',
    borderRadius: 10,
    paddingVertical: 100,
    paddingHorizontal: 70,
  },

  txtGEsquerda: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'absolute',
    left: 23,
    top: 25,
  },

  txtMEsquerda: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    position: 'absolute',
    top: 60,
    left: 7,
  },

  preImg: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 90,
    left: 20,
  },

  direita: {
    marginLeft: 40,
    backgroundColor: '#ffff',
    borderRadius: 10,
    paddingVertical: 100,
    paddingHorizontal: 70,
  },

  txtGDireita: {
    color: '#1f3892',
    fontSize: 22,
    textAlign: 'center',
    position: 'absolute',
    left: 10,
    top: 25,
    textAlign: 'left',
  },

  logo: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 105,
    left: 30,
  },
});