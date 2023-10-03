import { StyleSheet, View, Text} from 'react-native';
export default (props) => {
    
    return(
            <Text style={styles.texto}>{props.question}</Text>
    );
}
const styles = StyleSheet.create({
    
    texto:{
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        paddingLeft: 13,
       
    },

})