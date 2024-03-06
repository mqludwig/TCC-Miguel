import React from "react";
import { View, Text, ImageBackground, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, StatusBar } from "react-native";
//import { TouchableOpacity } from "react-native-gesture-handler";
import { BlurView } from 'expo-blur';
import GenericIcons from '../components/GenericComp/Icons';
import { useNavigation, useRouter } from 'expo-router';
import TabBar from '../components/TabBarComp';

const Philosophers = () => {
    const nav = useNavigation();
    const router = useRouter();

    const filosofos = [
        { nome: "Tales de Mileto", image: require('../assets/images/filosofos/tales.png'), cover: require('../assets/images/covers/talesCover.jpg'), rota: 'Building'},
        { nome: "Anaximandro", image: require('../assets/images/filosofos/anaximandro.png'), cover: require('../assets/images/covers/anaximandroCover.jpg'), rota: 'Building'},
        { nome: "Anaximenes", image: require('../assets/images/filosofos/anaximenes.png'), cover: require('../assets/images/covers/anaximenesCover.jpg'), rota: 'Building'},
        { nome: "Heraclito", image: require('../assets/images/filosofos/heraclito.png'), cover: require('../assets/images/covers/heraclitoCover.jpg'), rota: 'Building' },
        { nome: "Pitagoras", image: require('../assets/images/filosofos/pitagoras.png'), cover: require('../assets/images/covers/pitagorasCover.jpg'), rota: 'Building' },
        { nome: "Sócrates", image: require('../assets/images/filosofos/socrates2.png'), cover: require('../assets/images/covers/socrates.jpg'), rota: '/philosopher/socrates' },
    ];

    return (

        <SafeAreaView style={styles.container}>

            <StatusBar barStyle="light-content" backgroundColor="#131F24" />

            <View style={styles.superior}>
                <TouchableOpacity onPress={() => nav.navigate('Summary')} style={styles.backIcon}>
                    <GenericIcons icon='angle-left' size={40} color='white' />
                </TouchableOpacity>

                <Text style={styles.textoSuperior}>Período Pré-Socrático</Text>
            </View>

            <ScrollView>

                {filosofos.map((filosofo, index) => (

                    <TouchableOpacity
                        key={index}
                        style={styles.imgFilosofoContainer}
                        onPress={() => router.replace(filosofo.rota)}
                        activeOpacity={1}>
                        <ImageBackground source={filosofo.cover} style={styles.imgCover} resizeMode="cover">
                            <View style={styles.imgFilosofoContainer}>
                                <Image source={filosofo.image} style={styles.imgFilosofo} resizeMode="contain" />
                            </View>
                            <View style={styles.nomeFilosofo}>
                                <Text style={styles.textoFilosofo}>{filosofo.nome}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                ))}

            </ScrollView>

            <TabBar />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#131F24",
    },

    superior: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#131F24",
        height: 50,
    },

    backIcon: {
        position: 'absolute',
        left: 15,
    },

    textoSuperior: {
        color: 'white',
        fontSize: 25,
        fontWeight: "bold",
    },

    imgFilosofoContainer: {
        marginHorizontal: 10,
        marginVertical: 10,
        alignItems: "center",
    },

    imgFilosofo: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        right: 60,
        borderRadius: 100,
    },

    imgCover: {
        flexDirection: "row",
        width: '100%',
        height: 170,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        overflow: "hidden",
    },

    nomeFilosofo: {
        backgroundColor: "#5271FF",
        padding: 8,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 200,
    },

    textoFilosofo: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default Philosophers;
