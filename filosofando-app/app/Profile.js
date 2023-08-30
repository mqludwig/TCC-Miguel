import { StyleSheet, Text, View, Image,TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import Splash from './Splash';
import PlacePerfil from '../components/PlacePerfil';
import UserName from '../components/ProfileComp/UserName';
import Nickname from '../components/ProfileComp/Nickname';
import ProfileImage from '../components/ProfileComp/ProfileImage';
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
    <Text style={styles.textoBotao}>Meu Perfil</Text>
    <Image source={imgFilosofo} style={styles.imagemFilosofo} />
    <UserName nomeUsuario ='Julian Barreto'/>
    <Nickname nick ='J2pi5er'/>
    {/* <ProfileImage addressPicture ='../assets/images/filosofos/tales.png'/> */}
    
    <Text style={styles.textoBotao}>Nickname</Text>
    </View>

      <View style={styles.centro}>
      
     </View>

     
   
    
     <View style={styles.inferior}>
   
     <TouchableOpacity onPress={() => nav.navigate ('Text')} style={styles.button}>
     <PlacePerfil icon='star' style={styles.button}/>
     <Text style={styles.textoBotao}>2500</Text>
     <Text style={styles.textoBotao}>XP</Text>
     </TouchableOpacity>
 
 
     <TouchableOpacity onPress={() => nav.navigate ('Quiz')} style={styles.button}>
     <PlacePerfil icon='calendar'/>
     <Text style={styles.textoBotao}>Entrou em</Text>
     <Text style={styles.textoBotao}>Maio 2023</Text>
     </TouchableOpacity>

      <TouchableOpacity onPress={() => nav.navigate ('Challenge')} style={styles.button}>
      <PlacePerfil icon='trophy'/> 
      <Text style={styles.textoBotao}>Nível</Text>
      <Text style={styles.textoBotao}>Ouro</Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.exercicios}>Insignias</Text>
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
        backgroundColor: '#3D1E7B',
       
    },
    superior:{
      flexDirection: 'column',
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
      backgroundColor: '#332d2f',
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