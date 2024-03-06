import { StyleSheet, View, TextInput, TouchableOpacity, Text, image } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome5';
//import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"
export default (props) => {
    const imgFilosofo = require('../assets/images/filosofos/tales.png');

    return (
        <View style={styles.container}>
            <Text style={styles.nome}>{props.nomeUsuario}</Text>
            <Text style={styles.nick}>{props.nickname}</Text>
            <Text style={styles.frase}>{props.fraseFilosofo}</Text>
            <FontAwesome5 name={props.icon} size={70} color='white' />
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

    nome: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
    },

    frase: {
        color: 'white',
        fontSize: 20,
        borderRadius: 15,
        //backgroundColor: '#332d2f',

    },
})