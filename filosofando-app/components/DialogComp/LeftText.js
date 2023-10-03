import { StyleSheet, View, Text} from 'react-native';
export default (props) => {
    
    
    return(
        <View style={styles.container}>
              <View style={styles.esquerda}>
            <Text style={styles.esquerdaTexto}>{props.Left}</Text>
           </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        paddingTop:20,
        paddingLeft:20,
        paddingRight:50,
     
       },
   
   
    esquerda:{
    
    },
    esquerdaTexto:{
        color: 'white',
        fontSize: 18,
        backgroundColor: '#332d2f',
        borderRadius:40,
        alignItems:  'flex-start',
        paddingLeft: 20,
        paddingVertical:10,
       
       
    },

})