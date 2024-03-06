import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import Splash from './Splash';
import Icons from '../components/HomeComp/Icons';
import { useNavigation } from 'expo-router';
import { Asset, useAssets } from 'expo-asset';
import { getPerfilFromUid } from '../connections_miguel/firebase-store';
import { useState, useEffect } from 'react';
import { emailLogin, auth, createUser, signOutFirebase } from "../connections_miguel/firebase-auth";
import TabBar from '../components/TabBarComp';
import SettingsIcons from '../components/GenericComp/SettingsIcons';
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

                    <View style={styles.titulo}>
                        <Text style={styles.txtG}>Ajuda</Text>
                    </View>

                    <View style={styles.opcao}>
                        <Text style={styles.txtM}>Quais unidades de aprendizado estão atualmente disponíveis?</Text>
                        <SettingsIcons settingsIcons='angle-down' />

                        <Text style={styles.txtP}>Atualmente, as unidades de aprendizado disponíveis abordam os três
                            primeiros períodos da filosofia: Pré-Socráticos, Clássicos e Helenísticos. Explore o pensamento
                            e os conceitos fundamentais dessas épocas históricas enquanto mergulha na jornada filosófica.
                            Novas unidades serão adicionadas em breve para expandir ainda mais seu conhecimento.</Text>

                    </View>

                    <View style={styles.opcao}>
                        <Text style={styles.txtM}>Quais filósofos posso explorar no aplicativo?</Text>
                        <SettingsIcons settingsIcons='angle-down' />
                        <Text style={styles.txtP}> Você pode explorar os principais filósofos de cada período da história
                            da filosofia em nosso aplicativo. Descubra as ideias e os pensamentos de figuras proeminentes dos
                            períodos Pré-Socrático, Clássico e Helenístico enquanto mergulha na riqueza do pensamento filosófico.</Text>
                    </View>

                    <View style={styles.opcao}>
                        <Text style={styles.txtM}>Como posso ganhar pontos no sistema de recompensas?</Text>
                        <SettingsIcons settingsIcons='angle-down' />
                        <Text style={styles.txtP}>Você pode ganhar pontos no nosso sistema de recompensas ao concluir atividades,
                            como leitura de textos, resposta a perguntas e participação em desafios. Cada atividade concluída rende
                            20 pontos, que podem ser visualizados na tela do seu perfil.</Text>
                    </View>

                    <View style={styles.opcao}>
                        <Text style={styles.txtM}>O que devo esperar dos textos disponíveis no aplicativo?</Text>
                        <SettingsIcons settingsIcons='angle-down' />
                        <Text style={styles.txtP}>Os textos disponíveis no aplicativo foram elaborados pela professora de filosofia
                            do IFSul Jaguarão, Michele Santos da Silva. Eles apresentam uma estrutura de chat online informal para tornar
                            a leitura e aprendizagem mais envolvente e acessível.</Text>
                    </View>

                    <View style={styles.opcao}>
                        <Text style={styles.txtM}>Como funcionam os questionários de avaliação de conhecimento?</Text>
                        <SettingsIcons settingsIcons='angle-down' />
                        <Text style={styles.txtP}>Os questionários de avaliação de conhecimento funcionam como um quiz. Cada pergunta
                            possui quatro respostas possíveis, e você deve escolher a correta. Se acertar, será direcionado para a próxima
                            questão; se errar, receberá um alerta para tentar novamente. Você pode tentar quantas vezes quiser. Após responder
                            a última questão, você será direcionado de volta para a tela do filósofo em questão.</Text>
                    </View>

                    <View style={styles.opcao}>
                        <Text style={styles.txtM}>Qual é o propósito e como participar dos desafios oferecidos no aplicativo?</Text>
                        <SettingsIcons settingsIcons='angle-down' />
                        <Text style={styles.txtP}>O propósito dos desafios é aplicar o aprendizado de alguma forma na vida diária. Para
                            participar, basta ler o que o desafio propõe e, após concluir, clicar no botão de "Tarefa Concluída".</Text>
                    </View>

                    <View style={styles.opcao}>
                        <Text style={styles.txtM}>Onde posso encontrar recursos adicionais de aprendizado?</Text>
                        <SettingsIcons settingsIcons='angle-down' />
                        <Text style={styles.txtP}>Você pode encontrar recursos adicionais de aprendizado nas próprias indicações presentes
                            nos textos, como livros, filmes e músicas. Além disso, uma simples pesquisa na internet pode revelar uma variedade de
                            recursos complementares.</Text>
                    </View>

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
        marginBottom: 20,
        paddingVertical: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: 'white',
    },

    opcao: {

        marginVertical: 20,
        marginHorizontal: 40,
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },

    txtM: {
        fontSize: 18,
        color: 'white',
        textAlign: 'justify',
        textAlign: 'center',
        fontWeight: 'bold',
    },
  
    txtP: {
        fontSize: 14,
        color: 'white',
        textAlign: 'justify',
       
    },
});