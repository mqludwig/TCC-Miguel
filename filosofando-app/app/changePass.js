import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform, ImageBackground, StatusBar, TextInput } from 'react-native';
import { useState } from 'react';
import Field from '../components/Field';
import { useFonts } from 'expo-font';
import Splash from './Splash'
import Password from '../components/Password';
import { emailLogin, auth, createUser, signOutFirebase} from "../connections_miguel/firebase-auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { sendPasswordResetEmail } from 'firebase/auth';
import { router } from "expo-router";
import { useNavigation } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';

export default function Login() {

  const [email, setEmail] = useState('');

  const replacePassword = async () => {
    if (email !== "") {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("Email enviado com sucesso!");
          nav.navigate("Login");
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert("Erro ao enviar email: " + errorMessage);
          return;
        });
    } else {
      alert("Preencha o campo de email!");
      return;
    }
  };

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
              <Text style={styles.subtitulo}>Redefina sua senha</Text>
              </View>

              <View style={styles.centro}>   
                <Text style={styles.vermelho}>Insira seu email e verifique sua caixa</Text>
                <Text style={styles.vermelho}>verifique sua caixa de entrada.</Text>
              </View>

              <View style={styles.inferior}>

                <View style={styles.loginForm}>
                <TextInput
          style={styles.formInput}
          placeholder="INSIRA SEU EMAIL"
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="rgba(0, 0, 0,0.6)"
        />

                  <TouchableOpacity
                    style={styles.loginButton}
                    onPress={replacePassword}
                  >
                    <Text style={styles.loginButtonText}>ENVIAR EMAIL</Text>
                  </TouchableOpacity>

                  
                  <View style={styles.naoPossui}>
                    <TouchableOpacity onPress={() => nav.navigate('Login')}>
                      <Text style={styles.esquecer}>Voltar a tela de Login!</Text>
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
    fontSize: 30,
    color: 'white',
  },

  vermelho: {
    color: '#FF5757',
    fontSize: 16,
  },

  formInput: {
    borderWidth: 1,
    
    width: 250,
    height: 50,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    paddingLeft: 10,
    marginBottom: 10,
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
    paddingTop: 200,
  },

  centro: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
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
