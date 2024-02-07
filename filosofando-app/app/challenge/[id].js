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

  const imgDesafio = require('../../assets/images/logos/pensador.png');

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
      <LinearGradient
     start={{x: 0, y: 0.25}} 
    end={{x: 1, y: 0.25}} 
    colors={[ '#373435' , 'blue']} 
    style={{ height: '100%'}}>
        <ScrollView>
        <View style={styles.superior}>
         <Image source={imgDesafio} style={styles.imgLogoDesafio} />
        </View>
       
        <View style={styles.centro}>
          <Text style={styles.fontSuperior}>Hora do Desafio!</Text>
          <Question Question={desafio} />
          </View>
         </ScrollView>
          <View style={styles.inferior}>
          <TouchableOpacity onPress={() => { createTwoButtonAlert(); aumentarXp(20); router.replace(`philosopher/${id}`), 3000 }}>
            {/* modificar para nav.navigate('Home') */}
            <Text style={styles.textoBotao}>Finalizar Tarefa</Text>
          </TouchableOpacity>
          </View>
          

        </LinearGradient>

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
    marginTop: 60,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  },

  imgLogoDesafio: {
    width: 290,
    height: 290,
    marginBottom: 0,
    // resizeMode: "contain",
  },

  centro: {
    marginTop: 40,
    alignItems: "center",
  
  },

  inferior: {
    marginBottom: 20,
    textAlign: "center",
  },

  fontSuperior: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  
  inferior: {
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,

    
  },
  textoBotao: {
   // backgroundColor: '#040D1B',
   backgroundColor: '#018abe',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 12,
    color: 'white',
    fontSize: 20,
    fontFamily: 'LisuBosa-Regular',
    textAlign: 'center',
    
    


  },

});