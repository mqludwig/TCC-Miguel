import { StyleSheet, View, Text} from 'react-native';
import { useFonts } from 'expo-font';
import Splash from '../../app/Splash';
export default (props) => {
    const [fontsLoaded] = useFonts ({
        'LisuBosa-Regular': require ('../../assets/fonts/LisuBosa-Regular.ttf'),
        'PlayfairDisplay-Black' : require ('../../assets/fonts/Playfair_Display/PlayfairDisplay-Black.ttf')
      });
      if(fontsLoaded){
        return (
   
        <View style={styles.container}>

<Text style={styles.nome}>{props.fraseFilosofo}</Text>
           
        </View>
  );}
  else{
    return <Splash/>
  }
}
const styles = StyleSheet.create({
   
    nome:{
        color: 'white',
        fontSize: 30,
        backgroundColor:'#332d2f',
        borderRadius:15,
        padding:15,
        fontFamily: 'LisuBosa-Regular',
    },

})