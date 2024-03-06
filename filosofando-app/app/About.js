import { StyleSheet, Text, View, Image, ScrollView, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import Splash from './Splash';
import Icons from '../components/HomeComp/Icons';
import { useNavigation } from 'expo-router';
import { Asset, useAssets } from 'expo-asset';
import { getPerfilFromUid } from '../connections_miguel/firebase-store';
import { useState, useEffect } from 'react';
import { emailLogin, auth, createUser, signOutFirebase } from "../connections_miguel/firebase-auth";
import TabBar from '../components/TabBarComp';
export default function Home() {

    const logo = require('../assets/images/logos/logoBranca.png');
    const imgpresocraticos = require('../assets/images/logos/presocraticos.png');
    const imgclassicos = require('../assets/images/logos/classicos.png');
    const imghelenisticos = require('../assets/images/logos/helenisticos.png');
    const imgEstudantes = require('../assets/images/logos/EstudantesAprendendo.png');

    const [perfil, setPerfil] = useState(null);

    useEffect(() => {
        getPerfilFromUid(auth.currentUser.uid).then((perfil) => {
            setPerfil(perfil);
        })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const nav = useNavigation();

    const [assets, error] = useAssets([require('../assets/images/filosofos/anaximandro.png'), require('../assets/images/filosofos/anaximenes.png'),
    ])

    const [fontsLoaded] = useFonts({
        'LisuBosa-Regular': require('../assets/fonts/LisuBosa-Regular.ttf'),
        'PlayfairDisplay-Black': require('../assets/fonts/Playfair_Display/PlayfairDisplay-Black.ttf'),
        'Comfortaa-Regular': require('../assets/fonts/Comfortaa/Comfortaa-Regular.ttf'),
        'Comfortaa-Bold': require('../assets/fonts/Comfortaa/Comfortaa-Bold.ttf'),
        'Comfortaa-Light': require('../assets/fonts/Comfortaa/Comfortaa-Light.ttf'),
        'LilitaOne-Regular': require('../assets/fonts/LilitaOne-Regular.ttf'),
    });

    if (fontsLoaded && assets) {

        return (
            <View style={styles.container}>

                <StatusBar barStyle="light-content" backgroundColor="#131F24" />

                <ScrollView>

                    <View style={styles.superior}>
                        <Text style={styles.nomeApp}>Filosofando</Text>
                    </View>

                    <View style={styles.titulo}>
                        <Text style={styles.txtG}>O que é o app?</Text>
                        <Text style={styles.txtM}>O Filosofando é um aplicativo educacional projetado para fornecer aos usuários uma plataforma interativa para explorar os fundamentos da filosofia de maneira acessível e envolvente.
                            Com uma abordagem amigável e interativa, o Filosofando oferece acesso a uma variedade de conteúdos filosóficos, incluindo informações sobre filósofos famosos, conceitos-chave da filosofia, questionamentos filosóficos e desafios intelectuais.
                            O aplicativo visa promover o pensamento crítico, incentivar a reflexão e fornecer uma base sólida para o entendimento da disciplina filosófica.
                            Com uma interface intuitiva e recursos diversificados, o Filosofando busca tornar a filosofia acessível a um público amplo, incentivando o aprendizado e a exploração contínua do pensamento filosófico.</Text>

                    </View>

                    <Image source={logo} style={styles.logo} />

                </ScrollView>
                <TabBar />

            </View>
        );
    }
    else {
        return <Splash />
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: "column",
        // width: "100%",
        //backgroundColor: '#5271FF',
        backgroundColor: '#131F24',
    },

    nomeApp: {
        fontFamily: 'LilitaOne-Regular',
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 20,
    },

    txtG: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
    },

    txtM: {
        fontSize: 16,
        color: 'white',
        marginTop: 20,
        textAlign: 'justify',
        marginHorizontal: 30,
    },

    logo: {
        width: 100,
        height: 100,
        marginTop: 10,
        alignSelf: 'center',
        borderRadius: 20,
    },
});