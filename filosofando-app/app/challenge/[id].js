import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView, ImageBackground, ScrollView, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import Splash from '../Splash';
import Question from '../../components/QuizComp/Question';
import { aumentarXp, getDialogFromUid, getDialogoFromFilosofo, getPerfilFromUid, getDesafiosFromFilosofo } from '../../connections_miguel/firebase-store';
import { auth } from "../../connections_miguel/firebase-auth";
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useLocalSearchParams, useRouter } from 'expo-router';
import { Asset, useAssets } from 'expo-asset';

export default function Quiz() {

  const imgDesafio = require('../../assets/images/logos/desafio.png');

  const { id } = useLocalSearchParams()

  const router = useRouter();

  const [fontsLoaded] = useFonts({
    'LisuBosa-Regular': require('../../assets/fonts/LisuBosa-Regular.ttf'),
    'PlayfairDisplay-Black': require('../../assets/fonts/Playfair_Display/PlayfairDisplay-Black.ttf')
  });

  const createTwoButtonAlert = () =>
    Alert.alert('Tarefa Finalizada', 'Você ganhou 20 pontos de xp');

  const [desafio, setDesafio] = useState(null);

  const fetchDesafios = async () => {
    const documento = await getDesafiosFromFilosofo(id)
    setDesafio(documento.desafio)
  }

  useEffect(() => {
    console.log("entrou no useEffect")
    fetchDesafios()
    console.log("saiu do useEffect")

  }, [])

  if (fontsLoaded) {

    return (

      <View style={styles.container}>
          
           <View style={styles.superior}>
           
           <Image source={imgDesafio} style={styles.imgLogoDesafio} />
           </View>
        <View style={styles.centro}>
          <Text style={styles.fontSuperior}>É hora do</Text>
          <Text style={styles.fontSuperior2}>Desafio!</Text>
          
          <Question Question={desafio} />
          <View style={styles.botao}>
          <TouchableOpacity onPress={() => { createTwoButtonAlert(); aumentarXp(20); router.replace(`philosopher/${id}`), 3000 }}>
            {/* modificar para nav.navigate('Home') */}
            <Text style={styles.textoBotao}>Finalizar Tarefa</Text>
          </TouchableOpacity>
          </View>
        </View>
        <SafeAreaView style={styles.inferior}>

          
        </SafeAreaView>
      </View>


    );
  }
  else {
    return <Splash />
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    width: "100%",
    alignContent: "center",
    alignItems: "center",

  },

  superior: {
    marginTop: 20,
    marginBottom: 40,
    textAlign: "center",
  },

  imgLogoDesafio: {
    width: 380,
    height: 380,
    marginBottom: -130,
    // resizeMode: "contain",
  },

  centro: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 110,
    borderTopRightRadius: 110,
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "white",
  },

  inferior: {
    marginBottom: 20,
    textAlign: "center",
  },

  fontSuperior: {
    fontSize: 40,
    color: "black",
    fontWeight: "bold",
    marginTop: 20,
  },
  fontSuperior2: {
    marginTop: -10,
    marginBottom: 20,
    fontSize: 40,
    color: "red",
    fontWeight: "bold",
  },

  botao: {
    paddingVertical: 60,
    paddingHorizontal: 40,
    width: 300,
    top: 260,
    position: "absolute",
  },
  textoBotao: {
    backgroundColor: 'red',
    borderRadius: 30,
    color: 'white',
    fontSize: 20,
    fontFamily: 'LisuBosa-Regular',
    paddingVertical: 20,
    paddingHorizontal: 40,
    textAlign: 'center',

  },

});