import { StyleSheet, Text, View, Alert, ScrollView, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import Splash from '../Splash';
import Question from '../../components/QuizComp/Question';
import Answer from '../../components/QuizComp/Answer';
import { useEffect } from 'react';
import { useNavigation, useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { getQuizFromFilosofo, aumentarXp } from '../../connections_miguel/firebase-store';
import { LinearGradient } from 'expo-linear-gradient';
export default function Quiz() {

  const nav = useNavigation();

  const router = useRouter();

  const { id } = useLocalSearchParams()

  const mensagemAlerta = () =>
    Alert.alert('Tarefa Finalizada', 'Você ganhou 20 pontos de xp');

  const mensagemErrou = () =>
    Alert.alert('Resposta Errada!', 'Tente outra vez.');

  const [perguntas, setPerguntas] = useState([]);

  const [perguntaAtual, setPerguntaAtual] = useState(0);

  const [corretas, setCorretas] = useState(0);

  const verificaAcerto = (alternativa) => {

    if (alternativa == perguntas[perguntaAtual].correta) {
      console.log("Acertou");
      if (perguntaAtual == perguntas.length - 1) {
        mensagemAlerta();
        aumentarXp(20);
        setTimeout(() => router.replace(`philosopher/${id}`), 3000)
      }
      else {
        setPerguntaAtual(perguntaAtual + 1);
      }
    }
    else {
      console.log("Errou");
      mensagemErrou();
    }
  }

  useEffect(() => {
    getQuizFromFilosofo(id).then((perguntas) => {
      setPerguntas(perguntas);
      console.log(perguntas);
    })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  const [fontsLoaded] = useFonts({
    'LisuBosa-Regular': require('../../assets/fonts/LisuBosa-Regular.ttf'),
    'PlayfairDisplay-Black': require('../../assets/fonts/Playfair_Display/PlayfairDisplay-Black.ttf')
  });

  if (fontsLoaded) {
    return (

      <LinearGradient
        colors={['black', '#071B39']}
        style={{ height: '100%' }}>

        <StatusBar barStyle="light-content" backgroundColor="black" />

        <View style={styles.superior}>
          <Text style={styles.txtSuperior}>Pergunta {perguntaAtual + 1} de {perguntas.length}</Text>
        </View>

        <ScrollView>

          {perguntas.length > 0 && <><Question Question={perguntas[perguntaAtual].questao} />
            <View style={styles.centro}>
              <Answer alternativa={0} onPress={verificaAcerto} Answer={perguntas[perguntaAtual].alternativas[0]} />
              <Answer alternativa={1} onPress={verificaAcerto} Answer={perguntas[perguntaAtual].alternativas[1]} />
              <Answer alternativa={2} onPress={verificaAcerto} Answer={perguntas[perguntaAtual].alternativas[2]} />
              <Answer alternativa={3} onPress={verificaAcerto} Answer={perguntas[perguntaAtual].alternativas[3]} />
            </View></>}

        </ScrollView>

      </LinearGradient>

    );
  }
  else {
    return <Splash />
  }
}
const styles = StyleSheet.create({
  superior: {
    paddingTop: 40,
    paddingBottom: 20,
    textAlign: "center",
  },

  txtSuperior: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    paddingLeft: 13,
  },

  centro: {
    paddingTop: 50,
    alignItems: "center",
  },

});