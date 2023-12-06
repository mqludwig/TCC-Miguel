import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import Splash from './Splash';
import Question from '../components/QuizComp/Question';
import Answer from '../components/QuizComp/Answer';
import Confirm from '../components/QuizComp/Confirm';
import { useEffect } from 'react';
import { useNavigation } from 'expo-router';
import { Asset, useAssets } from 'expo-asset';
import { useState } from 'react';
import { getQuizFromFilosofo } from '../connections_miguel/firebase-store';
export default function Quiz() {

  const nav = useNavigation();

  const [perguntas, setPerguntas] = useState([]);
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [corretas, setCorretas] = useState(0);
  const verificaAcerto = (alternativa) => {
    if (alternativa == perguntas[perguntaAtual].correta) {
      console.log("Acertou");
      setPerguntaAtual(perguntaAtual + 1);
    }
    else {
      console.log("Errou");

    }
  }





  useEffect(() => {
    getQuizFromFilosofo("platao").then((perguntas) => {
      setPerguntas(perguntas);
      console.log(perguntas);
    })
      .catch((error) => {
        console.log(error);
      })
  }, [])

 


  const [fontsLoaded] = useFonts({
    'LisuBosa-Regular': require('../assets/fonts/LisuBosa-Regular.ttf'),
    'PlayfairDisplay-Black': require('../assets/fonts/Playfair_Display/PlayfairDisplay-Black.ttf')
  });

  if (fontsLoaded) {

    return (


      <View style={styles.container}>
        <View style={styles.superior}>
          <Text style={styles.fontSuperior}>Pergunta {perguntaAtual+1} de {perguntas.length}</Text>
        </View>
        <ScrollView>
          {perguntas.length>0 && <><Question Question={perguntas[perguntaAtual].questao} />
            <SafeAreaView style={styles.centro}>

              <Answer alternativa={0} onPress={verificaAcerto} Answer={perguntas[perguntaAtual].alternativas[0]} />
              <Answer alternativa={1} onPress={verificaAcerto} Answer={perguntas[perguntaAtual].alternativas[1]} />
              <Answer alternativa={2} onPress={verificaAcerto} Answer={perguntas[perguntaAtual].alternativas[2]} />
              <Answer alternativa={3} onPress={verificaAcerto} Answer={perguntas[perguntaAtual].alternativas[3]} />

            </SafeAreaView></>}

          <SafeAreaView style={styles.inferior}>
            <Confirm Confirm='Confirmar' />
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
    marginTop: 40,
    textAlign: "center",
  },
  centro: {
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

});