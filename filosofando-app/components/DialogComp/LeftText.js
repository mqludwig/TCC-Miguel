import { StyleSheet, View, Text} from 'react-native';
export default (props) => {
    
    
    return(
     
              <View style={styles.esquerda}>
            <Text style={styles.esquerdaTexto}>{props.Left}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
  
   
   
    esquerda:{
        alignItems:  'flex-start',
        paddingTop:20,
        paddingLeft:20,
        paddingRight:50,
     
       
    },
    esquerdaTexto:{
      

        color: 'white',
        fontSize: 18,
        paddingVertical:10,
        backgroundColor: '#332d2f',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius:20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingLeft:15,
        paddingRight:35,
       
       
       
    },

})