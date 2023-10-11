import { StyleSheet, View, TextInput, TouchableOpacity,Text, image } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default (props) => {
   
    
    return(
        <View style={styles.container}>

            <Icon name={props.icon} size={70} color= 'white'  /> 
    
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
       
        backgroundColor:'#332d2f',
         borderRadius: 100,
         padding:15,
         
       
    },


})