import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView, Alert, ImageBackground, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import Splash from '../Splash';
import Question from '../../components/QuizComp/Question';
import Answer from '../../components/QuizComp/Answer';
import Confirm from '../../components/QuizComp/Confirm';
import { useEffect } from 'react';
import { useNavigation, useLocalSearchParams, useRouter} from 'expo-router';
import { Asset, useAssets } from 'expo-asset';
import { useState } from 'react';
import { getQuizFromFilosofo, aumentarXp } from '../../connections_miguel/firebase-store';
import { LinearGradient } from 'expo-linear-gradient';
export default function Quiz() {

  const nav = useNavigation();

  const router = useRouter();

  const {id} = useLocalSearchParams()

  const createTwoButtonAlert = () =>
    Alert.alert('Tarefa Finalizada', 'Você ganhou 20 pontos de xp');

  const [perguntas, setPerguntas] = useState([]);
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [corretas, setCorretas] = useState(0);
  const verificaAcerto = (alternativa) => {
    
    if (alternativa == perguntas[perguntaAtual].correta) {
      console.log("Acertou");
      
      if (perguntaAtual == perguntas.length - 1) {
        createTwoButtonAlert();
        aumentarXp(20);
        setTimeout(()=> router.replace(`philosopher/${id}`), 3000)  
        
      }
      else{
        setPerguntaAtual(perguntaAtual + 1);
      }
    }
    else {
      console.log("Errou");
      alert("erro");

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
        style={{ height: '100%'}}>
         <View style={styles.superior}>
          <Text style={styles.fontSuperior}>Pergunta {perguntaAtual+1} de {perguntas.length}</Text>
        </View>
        <ScrollView>
          
          {perguntas.length>0 && <><Question Question={perguntas[perguntaAtual].questao} />
      
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
  fontSuperior: {
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