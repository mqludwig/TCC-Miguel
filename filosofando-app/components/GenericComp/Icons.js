import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default function GoBackIcon (props)  {
   
    return(
        <View style={styles.goBackIcon}>
            <Icon name={props.goBackIcon} size={25} color= 'white' /> 
        </View>
    );
}
const styles = StyleSheet.create({
        goBackIcon: {
        paddingLeft: 10,
    },
})