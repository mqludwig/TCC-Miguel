import { StyleSheet, View, TextInput, TouchableOpacity, Text, image } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default (props) => {
    const imgFilosofo = require('../assets/images/filosofos/tales.png');

    return (
        <View style={styles.container}>
            {/* <TextInput placeholder = {props.label}  paddingLeft={4} placeholderTextColor={'rgba(0, 0, 0,0.6)'} color='black' ></TextInput> */}
            <Icon name={props.icon} size={70} color='red' />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        // borderBottomWidth: 1,
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // width: '70%',
        // height: '15%',
        // paddingTop: 0,
        // paddingBottom: 0,
        // marginTop: 20,
        // marginBottom: 15,
        // backgroundColor: "rgba(255, 255, 255, 0.4)",
        // borderRadius: 15,
    },

    // texto:{
    //     color: 'white',
    //     paddingBottom: 0,
    //     paddingLeft:10,
    //     flex:2,
    //     selectionColor: 'white'
    // },
})