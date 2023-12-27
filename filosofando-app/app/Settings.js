import { StyleSheet, Text, View, Button, Image, TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import Splash from './Splash';
import PlacePerfil from '../components/PlacePerfil';
import Icon from '../components/ProfileComp/Icon';
import UserName from '../components/ProfileComp/UserName';
import Nickname from '../components/ProfileComp/Nickname';
import ProfileImage from '../components/ProfileComp/ProfileImage';
import Cadastro from '../components/Cadastro';
import Icons from '../components/HomeComp/Icons';
import TabBar from '../components/TabBarComp';
import { useNavigation } from 'expo-router';
import { Asset, useAssets } from 'expo-asset';
import { emailLogin, auth, createUser, signOutFirebase } from "../connections_miguel/firebase-auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";
import { useState, useEffect } from 'react';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { set } from 'react-native-reanimated';
import { getPerfilFromUid } from '../connections_miguel/firebase-store';
export default function Philosopher() {

  const trySignOut = async () => {
    signOutFirebase()
    nav.navigate('index')
  }

  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    getPerfilFromUid(auth.currentUser.uid).then((perfil) => {
      setPerfil(perfil);
    })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  const imgFilosofo = require('../assets/images/filosofos/tales.png');
  const imgCapa = require('../assets/images/covers/talesCover.jpg');
  const nav = useNavigation();
  const [assets, error] = useAssets([require('../assets/images/filosofos/anaximandro.png'), require('../assets/images/filosofos/anaximenes.png'),
  ])
  const [fontsLoaded] = useFonts({
    'LisuBosa-Regular': require('../assets/fonts/LisuBosa-Regular.ttf'),
    'PlayfairDisplay-Black': require('../assets/fonts/Playfair_Display/PlayfairDisplay-Black.ttf')
  });

  if (fontsLoaded && assets) {

    return (


      <View style={styles.container}>
        <ScrollView>
          <View style={styles.superior}>
            <TouchableOpacity onPress={() => nav.navigate('Profile')} style={styles.configIcon}>
              <Icon icon='angle-left' />
            </TouchableOpacity>
            <Text style={styles.meuPerfil}>Configurações</Text>
            <Text style={styles.meuPerfil}>SALVAR</Text>
          </View>
          <View style={styles.superior2}>
            {/* <Image source={imgFilosofo} style={styles.imagemFilosofo} /> */}
            <ProfileImage addressPicture={assets[0]} />
            <Text style={styles.meuPerfil}>Modificar Foto de Perfil</Text>
          </View>

          <View style={styles.centro}>
            <Text style={styles.sairTexto}>Nome</Text>
            <Cadastro label={perfil && perfil.name} setText={setName} />
            <Text style={styles.sairTexto}>Username</Text>
            <Cadastro label={perfil && perfil.username} setText={setUsername} />
          </View>
          <View style={styles.inferior}>
            <TouchableOpacity onPress={() => { trySignOut(); nav.navigate('index') }} style={styles.sair}>
              <Text style={styles.sairTexto}>SIGN OUT</Text>
            </TouchableOpacity>
          </View>


        </ScrollView>

        <View style={styles.tabBar}>
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
    backgroundColor: '#131F24',
    // flexDirection: "column",
    // width: "100%",
    // backgroundColor: '#3D1E7B',

  },
  superior: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  configIcon: {
    position: 'absolute',
    left: 20,
  },

  superior2: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "yellow",
  },
  centro: {
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: "red",
  },
  meuPerfil: {
    color: '#8F8E8E',
    fontSize: 25,
  },

  inferior: {
    textAlign: 'center',
    alignContent: 'center',
    backgroundColor: "blue",
    height: 250,

  },
  sair: {
    padding: 4,
    height: 60,
    width: 350,
    borderColor: '#8F8E8E',
    borderWidth: 4,


    justifyContent: 'center',
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 50
  },
  sairTexto: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
  tabBar: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopWidth: 1,
    borderTopColor: 'white',
    backgroundColor: 'green',
  },

});