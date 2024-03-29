import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform, ImageBackground, StatusBar } from 'react-native';
import { useState } from 'react';
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

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [userMessage, setUserMessage] = useState(false);

  //Funcao para tentar logar no firebase

  const tryLogin = async () => {
    console.log(email, pass)
    const userCredential = await emailLogin(email, pass); //chamada para outro arquivo

    if (userCredential) {
      console.log(userCredential.user);
      nav.navigate('Home')
    } else {
      //Tratar quando o usuário errar login e senha
      //Existem outras opções de erros:
      //Varias tentativas d login fracassados
      alert("erro");
    }
  }

  const img = require('../assets/images/backgrounds/backgroundAzul.png')

  const nav = useNavigation();

  const [fontsLoaded] = useFonts({
    'LisuBosa-Regular': require('../assets/fonts/LisuBosa-Regular.ttf'),
    'LilitaOne-Regular': require('../assets/fonts/LilitaOne-Regular.ttf'),
  });

  if (fontsLoaded) {
    return (
      <>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>

          <ImageBackground source={img} style={styles.imageBackground}>

            <View style={styles.container}>

              <StatusBar barStyle="light-content" backgroundColor="#0F1166" />

              <View style={styles.superior}>
                <Text style={styles.nomeApp}>Filosofando</Text>
              </View>

              <View style={styles.centro}>
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
                  <Field label='E-MAIL' value={email} setText={setEmail} />
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

                  <View style={styles.naoPossui}>
                  <TouchableOpacity onPress={() => nav.navigate('changePass')}>
                    <Text style={styles.esquecer}>Esqueceu sua senha?</Text>
                  </TouchableOpacity>
                  </View>

                  <View style={styles.naoPossui}>
                    <TouchableOpacity onPress={() => nav.navigate('Register')}>
                      <Text style={styles.esquecer}>Criar nova conta!</Text>
                    </TouchableOpacity>

                  </View>

                </View>

              </View>

            </View>

          </ImageBackground>

        </KeyboardAvoidingView>

      </>

    );
  }
  else {
    return <Splash />
  }
}
const styles = StyleSheet.create({
  container: {
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

  nomeApp: {
    fontSize: 60,
    color: 'white',
    fontFamily: 'LilitaOne-Regular',
  },

  subtitulo: {
    fontSize: 50,
    color: 'white',
  },

  vermelho: {
    color: '#FF5757',
    fontSize: 16,
  },

  naoPossui: {
    flexDirection: 'row',
    paddingTop: 10,
  },

  forgotPassword: {
    marginTop: 20,
  },

  esquecer: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  },

  superior: {
    alignItems: 'center',
    paddingTop: 150,
  },

  centro: {
    alignItems: 'center',
    paddingTop: 50,
  },

  inferior: {
    height: '50%',
    width: '100%',
    marginBottom: 100
  },

  loginMsg: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
    marginTop: 10,
    marginBottom: 0,
    alignSelf: 'center'
  },

  loginForm: {
    width: '80%',
    alignItems: 'center',
    fontFamily: 'LisuBosa-Regular',
  },

  loginButton: {
    padding: 4,
    height: '15%',
    width: 240,
    height: 40,
    backgroundColor: '#FF5757',
    justifyContent: 'center',
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 30,
  },

  loginButtonText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
  }
})
