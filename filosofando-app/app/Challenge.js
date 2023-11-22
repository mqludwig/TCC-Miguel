import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import Splash from './Splash';
import Question from '../components/QuizComp/Question';
import Answer from '../components/QuizComp/Answer';


import { useNavigation } from 'expo-router';
import { Asset, useAssets } from 'expo-asset';
export default function Quiz() {

  const nav = useNavigation();
  
  const [fontsLoaded] = useFonts({
    'LisuBosa-Regular': require('../assets/fonts/LisuBosa-Regular.ttf'),
    'PlayfairDisplay-Black': require('../assets/fonts/Playfair_Display/PlayfairDisplay-Black.ttf')
  });

  if (fontsLoaded) {

    return (


      <View style={styles.container}>
        <ScrollView>
                    <Question Question='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum vitae magna a ornare.' />
                <SafeAreaView style={styles.centro}>

                    <Answer Answer='Opção 1' />
                    <Answer Answer='Opção 2' />
                    <Answer Answer='Opção 3' />
                    <Answer Answer='Opção 4' />

                </SafeAreaView>

                <SafeAreaView style={styles.inferior}>
                   
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
    marginTop: 90,
    marginBottom: 40,
    textAlign: "center",
},
centro: {
    marginBottom: 90,
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