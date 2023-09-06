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
   
    esquerda:{
        alignItems:  'flex-start',
        paddingLeft: 20,
        backgroundColor: 'red',
        
    },
    esquerdaTexto:{
        color: 'white',
        fontSize: 20,
       
    },

})