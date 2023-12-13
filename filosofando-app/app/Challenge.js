import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView, ImageBackground, ScrollView, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import Splash from './Splash';
import Question from '../components/QuizComp/Question';
import { aumentarXp, getDialogFromUid, getDialogoFromFilosofo, getPerfilFromUid, getDesafiosFromFilosofo} from '../connections_miguel/firebase-store';
import {auth} from "../connections_miguel/firebase-auth";
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
import { Asset, useAssets } from 'expo-asset';


export default function Quiz() {

  const nav = useNavigation();
  
  const [fontsLoaded] = useFonts({
    'LisuBosa-Regular': require('../assets/fonts/LisuBosa-Regular.ttf'),
    'PlayfairDisplay-Black': require('../assets/fonts/Playfair_Display/PlayfairDisplay-Black.ttf')
  });

  const createTwoButtonAlert = () =>
    Alert.alert('Tarefa Finalizada', 'Você ganhou 20 pontos de xp');

  const [desafio, setDesafio] = useState(null);

  const fetchDesafios = async() => {
    const documento = await getDesafiosFromFilosofo("platao")
    setDesafio(documento.desafio)
   }

  useEffect(() => {
    console.log("entrou no useEffect")
    fetchDesafios()
    console.log("saiu do useEffect")

  },[])

  if (fontsLoaded) {

    return (


      <View style={styles.container}>
        <ScrollView>
                    <Question Question={desafio} />
                <SafeAreaView style={styles.centro}>

                    

                </SafeAreaView>

                <SafeAreaView style={styles.inferior}>
               
          <TouchableOpacity onPress={()=>{createTwoButtonAlert(); aumentarXp(20); nav.navigate('Philosopher')}}>
          <Text style={styles.textoBotao}>Finalizar Tarefa</Text>
          </TouchableOpacity>
                </SafeAreaView>

         
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
    backgroundColor: "#5271FF",
    flex: 1,
    flexDirection: "column",
    width: "100%",

},
superior: {
    marginTop: 90,
    marginBottom: 40,
    textAlign: "center",
},
centro: {
    marginBottom: 90,
    alignItems: "center",
},
inferior: {
    marginBottom: 20,
    textAlign: "center",
},

botaoBranco: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 350,
    height: 40,
    margin: 17,
    padding: 8,
    textAlign: "center",
   

},

botaoTexto: {
    fontSize: 15,
    fontWeight: "bold",

},
fontSuperior: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    paddingLeft: 13,
},
textoBotao: {
  backgroundColor: 'red',
  color: 'white',
  fontSize: 20,
  fontFamily: 'LisuBosa-Regular',
  paddingVertical: 10,
  paddingHorizontal: 20,
},

});