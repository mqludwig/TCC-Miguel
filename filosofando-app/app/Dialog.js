import { StyleSheet, Text, View, Image,TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import Splash from './Splash';
import DialogosField from '../components/DialogosField';
import { useNavigation } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import RightText from '../components/DialogComp/RightText';
import LeftText from '../components/DialogComp/LeftText';
import CharacterName from '../components/DialogComp/CharacterName';
export default function Texto() {

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
   
    
   <LinearGradient
                    colors={['black', 'gray']} // Cores do gradiente
                    style={styles.superior} // Aplica o gradiente ao estilo da barra superior
                >
    <Image source={imgFilosofo} style={styles.imagemFilosofo} />
   <CharacterName NameChar = 'Professor Setarcós'/>
    
    
    </LinearGradient>
    <ScrollView style={styles.scrollContent}>
      <View style={styles.centro}>
      <LeftText Left= 'aaaaaaaaa bbbbbbbbb ccccccccc dddddddddddddddddd eeeeeeeeeeeeeeee fffffffffff gggggggggggggg!'/>
      <RightText Right= 'aaaaaaaaa bbbbbbbbb ccccccccc!'/>
      <RightText Right= 'aaaaaaaaa bbbbbbbbb ccccccccc!'/>
      <LeftText Left= 'aaaaaaaaa bbbbbbbbb ccccccccc!'/>
      <RightText Right= 'aaaaaaaaa bbbbbbbbb ccccccccc dddddddddddddddddd eeeeeeeeeeeeeeee fffffffffff gggggggggggggg!'/>
      
      {/* <DialogosField textoEsquerda ='Olá jovem, espero que você esteja tendo um ótimo dia 😀! Eu sou Aldus Setarcos, é um prazer conhecer você! '/>
      <DialogosField textoEsquerda ='Na aula de hoje vamos aprender um pouquinho sobre quem era Platão'/>
      <DialogosField textoEsquerda ='Certo?'/>
      <DialogosField textoDireita ='blablabla bla bla'/>
      <DialogosField textoEsquerda ='Platão nasceu na cidade grega de Atenas bla bla bla bla'/>
      <DialogosField textoEsquerda ='Vou colocar aqui algumas imagens de Atenas pra você conseguir se deslocar até lá'/> */}
     
      
     
     </View>
     <View style={styles.inferior}>
     <DialogosField icon='arrow-alt-circle-right'/>    
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
    scrollContent: {
      flex: 1,
     
  },
    
    superior:{
      
      flexDirection: 'row',
      alignItems: 'center', 
      justifyContent: 'flex-start',
      marginTop: 20, 
      marginBottom: 0,
      paddingBottom: 10, 
      
      zIndex: 1,
      
      
    },
    centro:{
      
    
     
     
    },
   
  
    imagemFilosofo:{
      width: 60,
      height: 60,
      resizeMode: "contain",
      
    },
   
   

    inferior:{
  
      alignContent: 'center',
    alignItems: 'center',
     textAlign: 'center',
    marginBottom: 60,
    flexDirection: 'row',
    
    },
  
  
   button: {
    marginHorizontal: 35, 
    alignItems: 'center',
    marginTop: -90, 
   
  },
    
    


});