import { StyleSheet, View, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default (props) => {
    
    
    return(
        <View style={styles.container}>
            <LinearGradient
                    colors={['#784cc2', '#4c4cc2']} // Cores do gradiente   
               
                    style={styles.direita} // Aplica o gradiente ao estilo da barra superior
                >
              
            <Text style={styles.direitaTexto}>{props.Right}</Text>
       
           </LinearGradient>
        </View>
    );
}
const styles = StyleSheet.create({
   
   container:{
    paddingTop:20,
    paddingLeft:50,
    paddingRight:20,
 
   },
   
    direita:{
        alignItems:  'flex-end',
        paddingRight: 20,
        borderRadius:40,
   
       // backgroundColor: '#784cc2',
    },
    
    direitaTexto:{
        color: 'white',
        fontSize: 18,
        paddingVertical:10,
       
    },

})


