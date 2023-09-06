import { StyleSheet, View, Text} from 'react-native';
export default (props) => {
    
    
    return(
        <View style={styles.container}>
              <View style={styles.direita}>
            <Text style={styles.direitaTexto}>{props.Right}</Text>
           </View>
        </View>
    );
}
const styles = StyleSheet.create({
   
    direita:{
        alignItems:  'flex-end',
        paddingRight: 20,
        backgroundColor: 'blue',
    },
    direitaTexto:{
        color: 'white',
        fontSize: 20,
       
    },

})