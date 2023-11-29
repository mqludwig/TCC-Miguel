import { StyleSheet, View, TextInput, TouchableOpacity,Text, image } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default (props) => {
  
    
    return(
        <View>
            
            <Icon name={props.icon} size={40} color= 'green'  /> 

           
        </View>
    );
}
