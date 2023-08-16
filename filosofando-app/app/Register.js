import { StyleSheet, View, Text, TouchableOpacity as TO, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native';
import Cadastro from '../components/Cadastro';
import { useFonts } from 'expo-font';
import Splash from './Splash';
import { useNavigation } from 'expo-router';

export default function Register(){
    const [fontsLoaded] = useFonts ({
        'Montserrat-Regular': require ('../assets/fonts/Montserrat-Regular.ttf'),
        'LisuBosa-Regular': require ('../assets/fonts/LisuBosa-Regular.ttf'),
        'LilitaOne-Regular': require ('../assets/fonts/LilitaOne-Regular.ttf'),
      });
    
      const img = require('../assets/images/backgrounds/backgroundAzul.png')

      const nav = useNavigation();
      
      if(fontsLoaded){
    return(
        <>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
        <ImageBackground source={img} style={styles.imageBackground}>
        <ScrollView>
            <View style={styles.superior}>
                <Text style={styles.textCadastro}> Criar uma nova  {'\n'} conta </Text>
            </View>
            <View style={styles.meio}>
                
                <Cadastro label='Nome'/>
                
                <Cadastro label='Nome de usuário'/>
                
                <Cadastro label='Email'/>

                <Cadastro label='Senha'/>
                
                <Cadastro label='Confirme sua senha'/>
            </View>
            <View style={styles.rodape}>
                <TO style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>
                        Sign Up
                    </Text>
                </TO>
                </View>

                <View style={styles.naoPossui}>
                    
                    <TO onPress ={() => nav.navigate ('Login')}>
                    <Text style={styles.naoPossuiCadastro}>Já tem uma conta? Faça login aqui!</Text>
                    </TO>
                </View>
        </ScrollView>
        </ImageBackground>
        </KeyboardAvoidingView>
        </>
    );

}
            else{
            return <Splash/>
            }
    
        }
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        
        width: "100%"
    },
    
    superior:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 30,
        marginTop: 80,
    },
    meio:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:80
    },
    rodape:{
        flex:1,
        marginTop: 100
    },
    
    registerButton:{
        padding: 4,
        height: 40,
        width: 200,
        backgroundColor: '#FF5757',
        justifyContent: 'center',
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 50
    },
    registerButtonText:{
        fontWeight: 'bold',
        //fontWeight: '400',
        fontSize:20,
        color: 'white',
        textAlign: 'center',
       


    },
    textCadastro:{
        fontSize: 40,
        color: 'white',
       marginBottom: 30,
        textAlign: 'center',
        fontFamily: 'LilitaOne-Regular',
        
        
    },
  
      naoPossuiCadastro:{
        color: '#FF5757',
        fontFamily: 'LilitaOne-Regular',
        fontSize: 20,
      },
      naoPossui:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30

      },

})

