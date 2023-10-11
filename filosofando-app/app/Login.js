import { StyleSheet, Text, View, Image,TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView, ImageBackground} from 'react-native';
import {useState} from 'react';
import Field from '../components/Field';
import { useFonts } from 'expo-font';
import Splash from './Splash'
import Password from '../components/Password';
import { emailLogin, auth, createUser, signOutFirebase } from "../connections_miguel/firebase-auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";
import { useNavigation } from 'expo-router';

import { ScrollView } from 'react-native-gesture-handler';

export default function Login() {

  const [email, setEmail] = useState('miguelludwig1@gmail.com');
  const [pass, setPass] = useState('123456');
  const [userMessage, setUserMessage] = useState(false);

   //Funcao para tentar logar no firebase
   
   const tryLogin = async () => {
    console.log(email, pass)
    const userCredential = await emailLogin(email, pass); //chamada para outro arquivo
    if(userCredential){
        
        console.log(userCredential.user);
        nav.navigate('Home')
        
    }else {
        //Tratar quando o usuário errar login e senha
        //Existem outras opções de erros:
            //Varias tentativas d login fracassados
        alert("erro");
    }
}


  const img = require('../assets/images/backgrounds/backgroundAzul.png')

  const nav = useNavigation();

  const [fontsLoaded] = useFonts ({
    'LisuBosa-Regular': require ('../assets/fonts/LisuBosa-Regular.ttf'),
    'LilitaOne-Regular': require ('../assets/fonts/LilitaOne-Regular.ttf'),
  });
  
  if(fontsLoaded){
  return (
    <>
    
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
    <ImageBackground source={img} style={styles.imageBackground}>
    <View style= {styles.container}>
 
      <View style= {styles.superior}>
        <Text style={styles.nomeApp}>Filosofando</Text>
       </View>
        <View style= {styles.centro}>
        <Text style={styles.subtitulo}>Login</Text>
        <Text style={styles.vermelho}>Entre para continuar</Text>
      </View>


    <View style={styles.inferior}>
    <View>
      {
        userMessage ? <Text style={styles.loginMsg}>Usuário ou pass inválido</Text> : null
      }
      
    </View>
    
        <View style={styles.loginForm}>
              <Field label='E-MAIL' value={email} setText={setEmail}/>
              <Password labelpass='SENHA' value={pass} setSenha={setPass} />
              {/* <Password labelpass= 'SENHA'  value={pass} onChangeText={t=>setPass(t)}/> */}

              <TouchableOpacity 
              //onPress={()=>setUserMessage(true)} 
              style={styles.loginButton}
             
              onPress={tryLogin}
              
              // onPress={() => {
              //   emailLogin(email, pass)
              //   console.log(email, pass)
              //   onPress={tryLogin}
              // }}
             
             >

                <Text style={styles.loginButtonText}>ENTRAR</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.esquecer}>Esqueceu sua pass?</Text>
              </TouchableOpacity>
              
              
              <View style={styles.naoPossui}>
              <ScrollView horizontal>
                <TouchableOpacity onPress ={() => nav.navigate ('Register')}>
                  <Text style={styles.esquecer}>Criar nova conta!</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress ={() => nav.navigate ('Unit')}>
                  <Text style={styles.esquecer}>Philosophers</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress ={() => nav.navigate ('Quiz')}>
                  <Text style={styles.esquecer}>Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress ={() => nav.navigate ('Philosopher')}>
                  <Text style={styles.esquecer}>Filosofo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress ={() => nav.navigate ('Dialog')}>
                  <Text style={styles.esquecer}>Texto</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress ={() => nav.navigate ('Profile')}>
                  <Text style={styles.esquecer}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress ={() => nav.navigate ('Home')}>
                  <Text style={styles.esquecer}>Home</Text>
                </TouchableOpacity>
                </ScrollView>
                </View>
        </View>
    </View>
    </View>
    </ImageBackground>
    </KeyboardAvoidingView>
  

    </>
    
  );}
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
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
      nomeApp:{
        fontSize: 65,
        color: 'white',
        fontFamily: 'LilitaOne-Regular',

      },
      subtitulo:{
        fontSize: 50,
        color: 'white',
      
      },
      vermelho:{
        color: '#FF5757',
        fontSize:16,
      },
      
      
      naoPossui:{
        flexDirection: 'row',
        paddingTop: 10,

      },
      forgotPassword:{
        marginTop: 7
      },
      esquecer:{
        
        fontSize: 17,
        color: 'white', 
        fontWeight: 'bold',
      },
      superior:{
        alignItems: 'center',
        paddingTop: 150,
      },
      centro:{
        alignItems: 'center',
        paddingTop: 50,
      },
      inferior:{
        height: '50%',
        width: '100%',
        marginBottom: 100
      },

      loginMsg:{
        fontWeight: 'bold',
        fontSize: 14,
        color: '#fff',
        marginTop: 10,
        marginBottom:0,
        alignSelf: 'center'
      },
      loginForm:{
        width:'80%',
        alignItems: 'center',
        fontFamily: 'LisuBosa-Regular',
      },
    
      loginButton:{
        padding: 4,
        height: '15%',
        width: 270,
        height:40,
        backgroundColor: '#FF5757',
        justifyContent: 'center',
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 40,
        
      },
      loginButtonText:{
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white',
        textAlign: 'center',
      }

     })
