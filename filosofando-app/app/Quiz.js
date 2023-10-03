import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import Splash from './Splash';
import Question from '../components/QuizComp/Question';
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

          <View style={styles.superior}>
          <Question question='Julian Barreto' />
          </View>

          <View style={styles.centro}>
          
        
          </View>
          <View style={styles.inferior}>
        
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
    flexDirection: "column",
    width: "100%",
    backgroundColor: '#5271FF',

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

});