import { StyleSheet, Text, View, Button, Image, TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import Splash from './Splash';
import PlacePerfil from '../components/PlacePerfil';
import Icon from '../components/ProfileComp/Icon';
import UserName from '../components/ProfileComp/UserName';
import Nickname from '../components/ProfileComp/Nickname';
import ProfileImage from '../components/ProfileComp/ProfileImage';
import HorizontalLine from '../components/ProfileComp/HorizontalLine';
import Experience from '../components/ProfileComp/Experience';
import Level from '../components/ProfileComp/Level';
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
            <Text style={styles.meuPerfil}>Meu Perfil</Text>
          
            <TouchableOpacity onPress={() => nav.navigate('Settings')} style={styles.configIcon}>
            <Icon icon='cog' />
          </TouchableOpacity>
            
          
          </View>
          <View style={styles.superior2}>
            {/* <Image source={imgFilosofo} style={styles.imagemFilosofo} /> */}
            <ProfileImage addressPicture={assets[0]} />
            <UserName nomeUsuario={perfil && perfil.name} />
            <Nickname nick={perfil && perfil.username} />
          </View>

          <View style={styles.centro}>
            <Text style={styles.textoBotao}>Estatísticas</Text>
            <View style={styles.button}>
              <Icon icon='star' style={styles.button} />
              <Text style={styles.textoBotao}>XP</Text>
              <Experience xp={perfil && perfil.xp} />

            </View>

            <View style={styles.button}>
              <Icon icon='calendar' />
              <Text style={styles.textoBotao}>Entrou em</Text>
               <Level nivel={perfil && perfil.createdAt}/>
              {/* <Text style={styles.textoBotao}>{perfil && perfil.createdAt}</Text> */}
            </View>

            <View style={styles.button}>
              <Icon icon='trophy' />
              <Text style={styles.textoBotao}>Nível</Text>
              <Level nivel={perfil && perfil.level} />
            </View>
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
    backgroundColor: 'black',
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
    right: 20,
  },

  superior2: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 30,
    backgroundColor: "pink",
  },
  centro: {
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 60,
    flexDirection: 'column',
    backgroundColor: '#8F8E8E',
    borderRadius: 30,
    marginHorizontal: 20,
  },
  meuPerfil: {
    color: '#8F8E8E',
    fontSize: 25,
  },

  inferior: {
    backgroundColor: '#8F8E8E',
    borderRadius: 30,
    marginHorizontal: 20,
    textAlign: 'center',
    flexDirection: 'row',

  },
  button: {
    backgroundColor: 'green',
    borderRadius: 30,
    marginHorizontal: 20,
    marginVertical: 20,
    paddingHorizontal: 50,
    alignItems: 'center',

  },
  textoBotao: {
    color: 'white',
    fontSize: 25,
  },
  tabBar: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopWidth: 1,
    borderTopColor: 'white'
  },

});