import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
export default (props) => {
    
    
    return(
     
         <TouchableOpacity style={styles.botaoBranco} onPress={() => props.onPress(props.alternativa)}>
            <Text style={styles.answerText}>{props.Answer}</Text>
            </TouchableOpacity>
  
    );
}
const styles = StyleSheet.create({
    answerText:{
        fontSize: 17,
        fontWeight: "bold",   
        textAlign: "center",
    },
    botaoBranco: {
        backgroundColor: "white",
        borderRadius: 10,
        width: 350,
        height: 40,
        margin: 17,
        padding: 8,
        textAlign: "center",
    },

})