import { StyleSheet, Text, View, Image,TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import Splash from './Splash';
import PlaceFilosofo from '../components/PlaceFilosofo';
import { useNavigation } from 'expo-router';

export default function Philosopher() {

  const nav = useNavigation();

  const [fontsLoaded] = useFonts ({
    'LisuBosa-Regular': require ('../assets/fonts/LisuBosa-Regular.ttf'),
  });
  
  if(fontsLoaded){
  return (
   
   
    <View style={styles.container}>
    
     {/* <PlaceFilosofo nomeFilosofo ='' icon={<Person/>}/> */}
     <PlaceFilosofo nomeFilosofo ='aaaaaaaaaa'/>
     <Text style={styles.texto2}>Sei lá</Text>
     
    </View>
   
    
  );}
      else{
        return <Splash/>
      }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
        backgroundColor: 'black',
       
    },
    texto2:{
        color: 'white',
        fontSize: 80,
    },


});