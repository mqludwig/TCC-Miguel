import { StyleSheet, View, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default (props) => {
    
    
    return(
        <View style={styles.direita}>
            
              
            <Text style={styles.direitaTexto}>{props.Right}</Text>
       
          
        </View>
    );
}
const styles = StyleSheet.create({
   
   container:{
    
 
   },
   
    direita:{
        alignItems:  'flex-end',
        paddingTop:20,
        paddingLeft:50,
        paddingRight:20,
       // backgroundColor: '#784cc2',
    },
    
    direitaTexto:{
        color: 'white',
        fontSize: 18,
        paddingVertical:10,
        backgroundColor:'#784cc2',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingLeft:35,
        paddingRight:15,
    },

})


