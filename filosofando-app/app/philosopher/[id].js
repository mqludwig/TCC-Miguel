import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import Splash from '../Splash';
import PlaceFilosofo from '../../components/PlaceFilosofo';
import PhilosopherImage from '../../components/PhilosopherComp/PhilosopherImage';
import PhilosopherName from '../../components/PhilosopherComp/PhilosopherName';
import PhilosopherCover from '../../components/PhilosopherComp/PhilosopherCover';
import PhilosopherQuote from '../../components/PhilosopherComp/PhilosopherQuote';
import PhilosopherIcons from '../../components/PhilosopherComp/PhilosopherIcons';
import { getFilosofoFromFilosofo } from '../../connections_miguel/firebase-store'
import { useLocalSearchParams, useNavigation,  useRouter  } from 'expo-router';
import { Asset, useAssets } from 'expo-asset';
import { useState, useEffect} from 'react';


export default function Philosopher() {

  const {id} = useLocalSearchParams()
 
  const router = useRouter();
   
  const imgFilosofo = require('../../assets/images/filosofos/tales.png');
  const imgCapa = require('../../assets/images/covers/talesCover.jpg');
  const nav = useNavigation();
  const [assets, error] = useAssets([require('../../assets/images/filosofos/anaximandro.png'), require('../../assets/images/covers/testeCapa.png'), require('../../assets/images/filosofos/anaximenes.png'),
  ])
  const [fontsLoaded] = useFonts({
    'LisuBosa-Regular': require('../../assets/fonts/LisuBosa-Regular.ttf'),
    'PlayfairDisplay-Black': require('../../assets/fonts/Playfair_Display/PlayfairDisplay-Black.ttf')
  });

  useEffect(() => {
    getFilosofoFromFilosofo(id).then((dados) => {
      console.log(dados)


    })
      .catch((error) => {
        console.log(error);
      })



  }, [])

  const [nomeFilosofo, setNomeFilosfo] = useState([]);
  const [fraseFilosofo, setFraseFilosofo] = useState([]);
  const [fotoFilosofo, setFotoFilosofo] = useState([]);

  useEffect(() => {
    getFilosofoFromFilosofo(id).then((DADOS) => {
      setNomeFilosfo(DADOS.nomeFilosofo);
      setFraseFilosofo(DADOS.fraseFilosofo);
      setFotoFilosofo(DADOS.fotoFilosofo);
      console.log(DADOS);
    })
      .catch((error) => {
        console.log(error);
      })
  
      
      
    }, [])

  if (fontsLoaded && assets) {
    return (


      <View style={styles.container}>
        <ScrollView>

          <View style={styles.superior}>

            <PhilosopherName nomeFilosofo={nomeFilosofo} />
            <PhilosopherImage addressPicture={fotoFilosofo} />
          </View>

          <View style={styles.centro}>
            <PhilosopherCover addressPicture={assets[1]} />
            <View style={styles.centroBaixo}>
              <PhilosopherQuote fraseFilosofo={fraseFilosofo} />
            </View>
          </View>


          <Text style={styles.exercicios}>Exercícios</Text>

          <View style={styles.inferior}>

            <TouchableOpacity onPress={() => router.push(`dialog/${id}`)} >
              <PhilosopherIcons icon='book-open' />
              <Text style={styles.textoBotao}>Textos</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => router.push(`quiz/${id}`)} >
              <PhilosopherIcons icon='clipboard-list' />
              <Text style={styles.textoBotao}>Quiz</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push(`challenge/${id}`)} >
              <PhilosopherIcons icon='bolt' />
              <Text style={styles.textoBotao}>Desafio</Text>
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
  superior: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    marginHorizontal: 70,
    paddingHorizontal: 20,
  },
  centro: {

    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',


  },
  centroBaixo: {
    paddingTop: 30,
  },


  imagemFilosofo: {
    width: 150,
    height: 150,
    resizeMode: "contain",

  },
  imagemCapa: {
    width: '90%',
    height: 180,
    borderRadius: 25,
  },
  exercicios: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    marginBottom: 20,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingLeft: 40,


  },
  teste: {
    fontFamily: 'LisuBosa-Regular',
    color: 'white',
  },

  inferior: {

    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 0,
    flexDirection: 'column',

  },
  textoBotao: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },






});