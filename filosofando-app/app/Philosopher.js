import { StyleSheet, Text, View, Image,TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import Splash from './Splash';
import PlaceFilosofo from '../components/PlaceFilosofo';
import { useNavigation } from 'expo-router';

export default function Philosopher() {

  const imgFilosofo = require('../assets/images/filosofos/tales.png');
  const imgCapa = require('../assets/images/covers/talesCover.jpg');
  const nav = useNavigation();

  const [fontsLoaded] = useFonts ({
    'LisuBosa-Regular': require ('../assets/fonts/LisuBosa-Regular.ttf'),
    'PlayfairDisplay-Black' : require ('../assets/fonts/Playfair_Display/PlayfairDisplay-Black.ttf')
  });
  
  if(fontsLoaded){
  return (
   
   
    <View style={styles.container}>
    <ScrollView>

    <View style={styles.superior}>
    <PlaceFilosofo nomeFilosofo ='Nome do Filósofo'/>
    <Image source={imgFilosofo} style={styles.imagemFilosofo} />
    </View>

      <View style={styles.centro}>
     <Image source={imgCapa} style={styles.imagemCapa} />
      <View style={styles.frases}>
     <PlaceFilosofo fraseFilosofo ='"A água é o princípio de todas as coisasaaaaaaaaaaaaaaaaaaa dsad."'/>
     </View>
     </View>

     
     <Text style={styles.exercicios}>Exercícios</Text>
    
     <View style={styles.inferior}>
   
     <TouchableOpacity onPress={() => nav.navigate ('Text')} style={styles.button}>
     <PlaceFilosofo icon='book-open'/>
     <Text style={styles.textoBotao}>Textos</Text>
     </TouchableOpacity>
 
 
     <TouchableOpacity onPress={() => nav.navigate ('Quiz')} style={styles.button}>
     <PlaceFilosofo icon='clipboard-list'/>
     <Text style={styles.textoBotao}>Quiz</Text>
     </TouchableOpacity>

      <TouchableOpacity onPress={() => nav.navigate ('Challenge')} style={styles.button}>
      <PlaceFilosofo icon='bolt'/> 
      <Text style={styles.textoBotao}>Desafio</Text>
      </TouchableOpacity>
    </View>
     
     </ScrollView>
    </View>
   
    
  );}
      else{
        return <Splash/>
      }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: "column",
        // width: "100%",
        backgroundColor: 'black',
       
    },
    superior:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      marginBottom: 20,
      marginHorizontal: 70,
      paddingHorizontal: 20,
    },
    centro:{
      
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
     
     
    },

    frases:{
      //backgroundColor: '#332d2f',
      width: '90%',
      height: 200,  
      borderRadius:25,
      textAlign: 'center',
      

    },
    imagemFilosofo:{
      width: 150,
      height: 150,
      resizeMode: "contain",
      
    },
    imagemCapa:{
      width: '90%',
      height: 180,  
      borderRadius:25,
    },
    exercicios:{
      color: 'white',
    
     fontSize: 35,
      marginBottom: 20,
      fontFamily: 'LisuBosa-Regular',

    },

    inferior:{
  
      alignContent: 'center',
    alignItems: 'center',
     textAlign: 'center',
    marginBottom: 60,
    flexDirection: 'row',
    
    },
   textoBotao:{
    color: 'white',
    fontSize:25,
   },
  
   button: {
    marginHorizontal: 35, 
    alignItems: 'center',
    marginTop: -90, 
   
  },
    
    


});