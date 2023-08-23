import React from "react";
import { View, Text, ImageBackground, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
//import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from 'expo-router';

const Home = () => {
    const nav = useNavigation();
   
    const filosofos = [
        { nome: "Tales de Mileto", image: require('../assets/images/filosofos/tales.png'), cover: require('../assets/images/covers/talesCover.jpg'), rota: 'Philosopher'  },
        { nome: "Anaximandro", image: require('../assets/images/filosofos/anaximandro.png'), cover: require('../assets/images/covers/anaximandroCover.jpg'), rota: 'Quiz'  },
        { nome: "Anaximenes", image: require('../assets/images/filosofos/anaximenes.png'), cover: require('../assets/images/covers/anaximenesCover.jpg') },
        { nome: "Heraclito", image: require('../assets/images/filosofos/heraclito.png'), cover: require('../assets/images/covers/heraclitoCover.jpg') },
        { nome: "Pitagoras", image: require('../assets/images/filosofos/pitagoras.png'), cover: require('../assets/images/covers/pitagorasCover.jpg') },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            {filosofos.map((filosofo, index) => (
           
                <TouchableOpacity
                    key={index}
                    style={styles.filosofoContainer}
                    onPress={() => nav.navigate(filosofo.rota)}
                    activeOpacity={1}
                >
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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
      
       
    },
//    filosofoContainer: {
//     activeOpacity: 1,
//    },
    imgFilosofoContainer: {
        marginBottom: 10,
        alignItems: "center",
    },
    imgFilosofo: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        right: 60,
    },
    imgCover: {
        flexDirection: "row",
        width: '100%',
        height: 170,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
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

export default Home;
