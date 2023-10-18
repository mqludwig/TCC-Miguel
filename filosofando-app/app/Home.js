import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import Splash from './Splash';
import Icons from '../components/HomeComp/Icons';
import { useNavigation } from 'expo-router';
import { Asset, useAssets } from 'expo-asset';
import { getPerfilFromUid } from '../connections_miguel/firebase-store';
import { useState, useEffect } from 'react';
import { emailLogin, auth, createUser, signOutFirebase } from "../connections_miguel/firebase-auth";
export default function Home() {

  const imgpresocraticos = require('../assets/images/logos/presocraticos.png');
  const imgclassicos = require('../assets/images/logos/classicos.png');
  const imghelenisticos = require('../assets/images/logos/helenisticos.png');
  const imgLogo = require('../assets/images/logos/logo.png');

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

        <View style={styles.superior}>

          <Text style={styles.nomeApp}>Filosofando</Text>

        </View>

        <ScrollView>

          <View style={styles.boasVindas}>
            <Text style={styles.ola}>Olá, {perfil && perfil.username}</Text>
            <Text style={styles.ola2}>O que você gostaria de aprender hoje?</Text>
          </View>

          <View style={styles.centro}>
            <Image source={imgpresocraticos} style={styles.imgUnidades} />
            <View style={styles.unidades}>
              <Text style={styles.txtUnidade}>Unidade 1: Período Pré-Socrático</Text>
              <Text style={styles.exercicios}>O nascimento da filosofia na Grécia Antiga, focando na exploração das origens e natureza do mundo através de ideias como os elementos naturais.</Text>
              <TouchableOpacity onPress={() => nav.navigate('Unit')}>
                <Text style={styles.botaoIniciarTexto}>INICIAR</Text>
              </TouchableOpacity>
            </View>


            <Image source={imgclassicos} style={styles.imgUnidades} />
            <View style={styles.unidades}>
              <Text style={styles.txtUnidade}>Unidade 2: Período Clássico</Text>
              <Text style={styles.exercicios}>5 Filósofos</Text>
              <Text style={styles.exercicios}>A era de ouro da filosofia grega, destacando figuras como Sócrates, Platão e Aristóteles, que exploraram a ética, política e a busca pelo conhecimento.</Text>
              <TouchableOpacity onPress={() => nav.navigate('Unit')}>
                <Text style={styles.botaoIniciarTexto}>INICIAR</Text>
              </TouchableOpacity>
            </View>


            <Image source={imghelenisticos} style={styles.imgUnidades} />
            <View style={styles.unidades}>
              <Text style={styles.txtUnidade}>Unidade 3: Período Helenístico</Text>
              <Text style={styles.exercicios}>6 Filósofos</Text>
              <Text style={styles.exercicios}>Uma época de difusão das filosofias gregas pelo vasto Império de Alexandre, o Grande, focando em filosofias pessoais, ética, e a busca pela felicidade em um mundo em transformação.</Text>
              <TouchableOpacity onPress={() => nav.navigate('Unit')}>
                <Text style={styles.botaoIniciarTexto}>INICIAR</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
        <View style={styles.inferior}>

          <TouchableOpacity onPress={() => nav.navigate('Home')} >
            <Icons icon='home' />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => nav.navigate('Profile')} >
            <Icons icon='user-circle' />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => nav.navigate('Quiz')} >
            <Icons icon='info-circle' />
          </TouchableOpacity>

        </View>


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
    backgroundColor: 'black'
  },

  superior: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },

  nomeApp: {
    fontFamily: 'LilitaOne-Regular',
    color: 'white',
    fontSize: 20,
  },

  centro: {
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 60,
    marginTop: 50,
    flexDirection: 'column',
  },

  boasVindas: {
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 10,
  },

  ola: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'Comfortaa-Bold',
  },

  ola2: {
    fontSize: 15,
    textAlign: 'left',
    color: 'white',
    fontFamily: 'Comfortaa-Light',
  },

  unidades: {
    backgroundColor: '#3256fa',
    borderRadius: 15,
    alignItems: 'center',
    marginHorizontal: 30,
  },

  txtUnidade: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Comfortaa-Bold',
  },

  imgUnidades: {
    width: 150,
    height: 150,
    marginBottom: 20,
    // resizeMode: "contain",
  },


  botaoIniciarTexto: {
    backgroundColor: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5271FF',
    borderRadius: 15,
    paddingHorizontal: 100,
    paddingVertical: 10,
    marginBottom: 20,
  },

  exercicios: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Comfortaa-Light',
  },

  inferior: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderTopWidth: 1,
        borderTopColor: 'white'
  },

  button: {
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: 0,
  },

  textoBotao: {
    color: 'white',
    fontSize: 25,
  },

});