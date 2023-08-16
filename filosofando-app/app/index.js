import { StyleSheet, Text, View, Image,TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import Splash from './Splash'
import { useNavigation } from 'expo-router';

export default function Welcome() {
    const img = require('../assets/images/backgrounds/backgroundAzul.png')
    const logoBranco = require('../assets/images/logos/logoBranca.png')

  const nav = useNavigation();

  const [fontsLoaded] = useFonts ({
    'LisuBosa-Regular': require ('../assets/fonts/LisuBosa-Regular.ttf'),
  });
  
  if(fontsLoaded){
  return (
   
   
    <SafeAreaView style={styles.container}>
    <ImageBackground source={img} style={styles.imageBackground}>


        <SafeAreaView style={styles.superior}>

            <Image source={logoBranco} style={styles.imgprincipal} />

        </SafeAreaView>
        <SafeAreaView style={styles.centro}>
            <Text style={styles.fontCentro}>Bem vindo ao Filosofando.</Text>
            <Text style={[styles.fontCentro, { marginTop: 25 }]}>Aprenda filosofia de forma divertida.</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.inferior}>
            <TouchableOpacity style={styles.botaoBranco} onPress={() => nav.navigate ('Register')}>
                <Text style={styles.botaoTexto}>Inscreva-se</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => nav.navigate ('Login')}>
                <Text style={styles.fontInferior}>Entrar</Text>
            </TouchableOpacity>
        </SafeAreaView>

    </ImageBackground>
</SafeAreaView>
   
    
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
       
    },
    superior: {
        marginBottom: 120,
        textAlign: "center",
    },
    centro: {
        marginBottom: 90,
        textAlign: "center",
        alignItems:"center",
        
    },
    inferior: {
        marginBottom: 20,
        textAlign: "center",
        alignItems: "center",
    },

    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    imgprincipal: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },

    botaoBranco: {
        backgroundColor: "white",
        borderRadius: 17,
        width: 200,
        height: 40,
        margin: 12,
        padding: 2,
        textAlign: "center",
       

    },

    botaoTexto: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#0A357D",
        textAlign: "center",

    },
    fontCentro: {
        fontSize: 25,
        color: "white",
        

    },

    fontInferior: {
        fontSize: 25,
        color: "white",
        fontWeight: "bold",

    },







});