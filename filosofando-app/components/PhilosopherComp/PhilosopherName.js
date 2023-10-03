import { StyleSheet, View, Text} from 'react-native';
import { useFonts } from 'expo-font';
export default (props) => {
   
        return (
   
        <View style={styles.container}>

            <Text style={styles.nome}>{props.nomeFilosofo}</Text>
           
        </View>
  );}

const styles = StyleSheet.create({
   
    nome:{
        color: 'white',
        fontSize: 50,
        fontWeight:'bold',
    },

})