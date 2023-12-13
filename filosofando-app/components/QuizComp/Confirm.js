import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
export default (props) => {
    
    
    return(
     
         <TouchableOpacity style={styles.botaoBranco}>
            <Text style={styles.answerText}>{props.Confirm}</Text>
            </TouchableOpacity>
  
    );
}
const styles = StyleSheet.create({
    answerText:{
        fontSize: 15,
        fontWeight: "bold",   
    },
    botaoBranco: {
        backgroundColor: "red",
        borderRadius: 10,
        width: 350,
        height: 40,
        margin: 17,
        padding: 8,
        textAlign: "center",
    },

})