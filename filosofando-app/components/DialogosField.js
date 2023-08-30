import { StyleSheet, View, TextInput, TouchableOpacity,Text, image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default (props) => {
   
    
    return(
        <View style={styles.container}>
            
            
            {/* <TextInput placeholder = {props.label}  paddingLeft={4} placeholderTextColor={'rgba(0, 0, 0,0.6)'} color='black' ></TextInput> */}
            <Text style={styles.nome}>{props.nomePersonagem}</Text>
            
            <View style={styles.direita}>
            <Text style={styles.direitaTexto}>{props.textoDireita}</Text>
            </View>
            <Text style={styles.esquerdaTexto}>{props.textoEsquerda}</Text>
           
           <Text style={styles.frase}>{props.fraseFilosofo}</Text>
            <Icon name={props.icon} size={70} color= 'red'  /> 
            
           

           
        </View>
    );
}
const styles = StyleSheet.create({
    
    direita:{
        alignItems:  'flex-end',
    },
    direitaTexto:{
        color: 'red',
    },
    esquerda:{
        alignItems:  'flex-start',
    },
    esquerdaTexto:{
        color: 'yellow',

    },
  
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

     nome:{
        // marginTop:15,
        // marginLeft: 10, 
        // flex: 1, 
        color: 'white', 
        fontSize: 20, 
        
     },

   



})