import { StyleSheet, View, Text} from 'react-native';
export default (props) => {
    
    
    return(
        <View style={styles.container}>

            <Text style={styles.nome}>{props.NomePersonagem}</Text>
           
        </View>
    );
}
const styles = StyleSheet.create({
   
    nome:{
        color: 'white',
        fontSize: 20,
       
    },

})