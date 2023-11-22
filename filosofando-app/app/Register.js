import { StyleSheet, View, Text, TouchableOpacity as TO, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { useState } from 'react';
import Cadastro from '../components/Cadastro';
import { useFonts } from 'expo-font';
import Splash from './Splash';
import { emailLogin, auth, createUser, signOutFirebase } from "../connections_miguel/firebase-auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";
import { useNavigation } from 'expo-router';
import { addUserFirestore } from '../connections_miguel/firebase-store';


export default function Register() {
    
    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'LisuBosa-Regular': require('../assets/fonts/LisuBosa-Regular.ttf'),
        'LilitaOne-Regular': require('../assets/fonts/LilitaOne-Regular.ttf'),
    });
   
    const img = require('../assets/images/backgrounds/backgroundAzul.png')
    const nav = useNavigation();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passC, setpassC] = useState('');
    
    const tryCreateUser = async () => {
        if (pass != passC) {
            alert('As senhas não coincidem');
            return;
        }
        console.log(email, pass)
        const userCredential = await createUser(email, pass);
        if (userCredential) {   
            addUserFirestore(userCredential.user.uid, name, username);
            nav.navigate('Home');
        } else {
            alert('Erro ao criar usuário');
        }
    };

      

    if (fontsLoaded) {
        return (
            <>
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
                    <ImageBackground source={img} style={styles.imageBackground}>
                        <ScrollView>
                            <View style={styles.superior}>
                                <Text style={styles.textCadastro}> Criar uma nova  {'\n'} conta </Text>
                            </View>
                            <View style={styles.temConta}>

                                <TO onPress={() => nav.navigate('Login')}>
                                    <Text style={styles.temContaText}>Já tem uma conta? Faça login aqui!</Text>
                                </TO>
                            </View>

                            <View style={styles.meio}>

                                <Cadastro label='Nome' setText={setName} />

                                <Cadastro label='Nome de usuário' setText={setUsername} />

                                <Cadastro value={email} setText={setEmail} label='Email' />
                                {/* <Cadastro value={email} onChangeText={t=>setEmail(t)} label='Email'/> */}


                                <Cadastro value={pass} setText={setPass} label='Senha' />
                                {/* <Cadastro value={pass} onChangeText={t=>setPass(t)} label='Senha'/> */}

                                <Cadastro label='Confirme sua senha'setText={setpassC} />

                            </View>
                            <View style={styles.inferior}>
                                <TO onPress={tryCreateUser} style={styles.registerButton}>
                                    <Text style={styles.registerButtonText}>
                                        Sign Up
                                    </Text>
                                </TO>
                            </View>


                        </ScrollView>
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
        width: "100%"
    },

    superior: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: -100, //modificar
        marginTop: 80,

    },
    meio: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80
    },
    inferior: {
        flex: 1,
        marginTop: 100
    },

    registerButton: {
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
    registerButtonText: {
        fontWeight: 'bold',
        //fontWeight: '400',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',


    },
    textCadastro: {
        fontSize: 40,
        color: 'white',
        marginBottom: 30,
        textAlign: 'center',
        fontFamily: 'LilitaOne-Regular',


    },

    temContaText: {
        color: '#FF5757',
        fontWeight: 'bold',
        fontSize: 15,
    },
    temConta: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 0, //modificar


    },

})