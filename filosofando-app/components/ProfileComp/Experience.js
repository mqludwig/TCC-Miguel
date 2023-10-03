import { StyleSheet, View, Text} from 'react-native';
export default (props) => {
    
    return(
            <Text style={styles.texto}>{props.xp}</Text>  
    );
}
const styles = StyleSheet.create({
    texto:{
        color: 'white',
        fontSize: 25,
    },

})