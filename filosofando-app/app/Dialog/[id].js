import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Alert, KeyboardAvoidingView, Platform, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import Splash from '../Splash';
import { LinearGradient } from 'expo-linear-gradient';
import CharacterName from '../../components/DialogComp/CharacterName';
import CharacterImage from '../../components/DialogComp/CharacterImage';
import RightText from '../../components/DialogComp/RightText';
import LeftText from '../../components/DialogComp/LeftText';
import Icons from '../../components/DialogComp/Icons';
import GenericIcons from  '../../components/GenericComp/Icons';
import { Asset, useAssets } from 'expo-asset';
import { aumentarXp, getDialogFromUid, getDialogoFromFilosofo, getPerfilFromUid } from '../../connections_miguel/firebase-store';
import {auth} from "../../connections_miguel/firebase-auth";
import { useState, useEffect } from 'react';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
export default function Texto() {

  const [perfil, setPerfil] = useState(null);

  const {id} = useLocalSearchParams()

  const router = useRouter();

useEffect(() => {
  getPerfilFromUid(auth.currentUser.uid).then((perfil) => {
    setPerfil(perfil);
  })
  .catch((error) => {
    console.log(error);
  })
}, [])

  const createTwoButtonAlert = () =>
    Alert.alert('Tarefa Finalizada', 'Você ganhou 20 pontos de xp');

    

  const imgFilosofo = require('../../assets/images/filosofos/tales.png');
  const imgCapa = require('../../assets/images/covers/talesCover.jpg');
  const nav = useNavigation();

  const [texto, setTexto] = useState(null);
  const [dialogo, setDialogo] = useState ([]);

useEffect(() => {
  // getPerfilFromUid(auth.currentUser.uid).then((perfil) => {
  //   setPerfil(perfil);
  // })
  // .catch((error) => {
  //   console.log(error);
  // })
  getDialogoFromFilosofo(id).then((dialogo) => {
    setDialogo(dialogo.dialogo);
  })
}, [])

  const [assets, error] = useAssets([require('../../assets/images/filosofos/tales.png'),
  ])

  const [fontsLoaded] = useFonts({
    'LisuBosa-Regular': require('../../assets/fonts/LisuBosa-Regular.ttf'),
    'PlayfairDisplay-Black': require('../../assets/fonts/Playfair_Display/PlayfairDisplay-Black.ttf')
  });

  if (fontsLoaded && assets) {
    return (


      <View style={styles.container}>

        <View style={styles.superior}>
          <TouchableOpacity onPress={() => nav.goBack()} >
          <GenericIcons goBackIcon='arrow-left' />
          </TouchableOpacity>
          <CharacterImage addressPicture={assets[0]} />
          <CharacterName NameChar='Professor Setarcós' />

        </View>

        <ScrollView style={styles.scrollContent}>
          <View style={styles.centro}>
           {dialogo.map((elemento, id) => {
              if(elemento.id == 1){
                return <LeftText key={id} Left={elemento.message} />
              } else {
                return <RightText  key={id} Right={elemento.message} />
              }
           })
          }
           
           
           
            {/* <LeftText Left= {texto && texto.username} />
            <RightText Right='aaac!' />
            <RightText Right='aaa!' />
            <LeftText Left='aaaaaaaaa bbbbbbbbb ccccccccc!' />
            <LeftText Left='Certo?' />
            <RightText Right='aaaaaaaaa bbbbbbbbb ccccccccc dddddddddddddddddd eeeeeeeeeeeeeeee fffffffffff gggggggggggggg!' />
            <RightText Right='Olá!' />
            <LeftText Left='aaaaaaaaa bbbbbbbbb ccccccccc dddddddddddddddddd eeeeeeeeeeeeeeee fffffffffff gggggggggggggg!' />
            <RightText Right='aaac!' />
            <RightText Right='aaa!' />
            <LeftText Left='aaaaaaaaa bbbbbbbbb ccccccccc!' />
            <LeftText Left='Certo?' />
            <RightText Right='aaaaaaaaa bbbbbbbbb ccccccccc dddddddddddddddddd eeeeeeeeeeeeeeee fffffffffff gggggggggggggg!' />
            <RightText Right='Olá!' /> */}

          </View>
     
          <View style={styles.inferior}>
          <TouchableOpacity onPress={()=>{createTwoButtonAlert(); aumentarXp(20); router.replace(`philosopher/${id}`), 9000}}>
          <Text style={styles.textoBotao}>Finalizar Tarefa</Text>
          </TouchableOpacity>
          </View>
       
        </ScrollView>
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
    backgroundColor: 'black',

  },
  scrollContent: {
    flex: 1,

  },

  superior: {

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 28,
    marginBottom: 0,
    paddingBottom: 10,

    zIndex: 1,


  },
  centro: {



  },


  imagemFilosofo: {
    width: 60,
    height: 60,
    contentFit: "contain", // era resizeMode 

  },

  inferior: {
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    paddingVertical: 30,
  },

  textoBotao: {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 20,
    fontFamily: 'LisuBosa-Regular',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },





});