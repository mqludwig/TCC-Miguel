import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import Splash from '../Splash';
import CharacterName from '../../components/DialogComp/CharacterName';
import CharacterImage from '../../components/DialogComp/CharacterImage';
import RightText from '../../components/DialogComp/RightText';
import LeftText from '../../components/DialogComp/LeftText';
import Icons from '../../components/DialogComp/Icons';
import GenericIcons from '../../components/GenericComp/Icons';
import { Asset, useAssets } from 'expo-asset';
import { aumentarXp, getDialogFromUid, getDialogoFromFilosofo, getPerfilFromUid } from '../../connections_miguel/firebase-store';
import { auth } from "../../connections_miguel/firebase-auth";
import { useState, useEffect } from 'react';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
export default function Texto() {

  const [perfil, setPerfil] = useState(null);

  const { id } = useLocalSearchParams()

  const router = useRouter();

  useEffect(() => {
    getPerfilFromUid(auth.currentUser.uid).then((perfil) => {
      setPerfil(perfil);
    })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  const mensagemAlerta = () =>
    Alert.alert('Tarefa Finalizada!', 'Você ganhou 20 pontos de xp.');

  const imgFilosofo = require('../../assets/images/filosofos/tales.png');

  const imgCapa = require('../../assets/images/covers/talesCover.jpg');

  const nav = useNavigation();

  const [texto, setTexto] = useState(null);

  const [dialogo, setDialogo] = useState([]);

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

  const [assets, error] = useAssets([require('../../assets/images/logos/professorDialogo.png'),
  ])

  const [fontsLoaded] = useFonts({
    'LisuBosa-Regular': require('../../assets/fonts/LisuBosa-Regular.ttf'),
    'PlayfairDisplay-Black': require('../../assets/fonts/Playfair_Display/PlayfairDisplay-Black.ttf')
  });

  if (fontsLoaded && assets) {
    return (
      <View style={styles.container}>

        <StatusBar barStyle="light-content" backgroundColor="#131F24" />

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
              if (elemento.id == 1) {
                return <LeftText key={id} Left={elemento.message} />
              } else {
                return <RightText key={id} Right={elemento.message} />
              }
            })
            }

          </View>

          <View style={styles.inferior}>
            <TouchableOpacity onPress={() => { mensagemAlerta(); aumentarXp(20); router.replace(`philosopher/${id}`), 9000 }}>
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
    backgroundColor: '#131F24',
  },

  scrollContent: {
    flex: 1,
  },

  superior: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 5,
    marginBottom: -10,
    paddingBottom: 10,
    backgroundColor: '#131F24',
    zIndex: 1,
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
    backgroundColor: '#784cc2',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
});