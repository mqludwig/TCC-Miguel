import React from "react";
import { View, Text, ImageBackground, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
//import { TouchableOpacity } from "react-native-gesture-handler";
import { BlurView } from 'expo-blur';
import GenericIcons from '../components/GenericComp/Icons';
import { useNavigation, useRouter } from 'expo-router';

const Philosophers = () => {
    const nav = useNavigation();
    const router = useRouter();
   
    const filosofos = [
        { nome: "Tales de Mileto", image: require('../assets/images/filosofos/tales.png'), cover: require('../assets/images/covers/talesCover.jpg'), rota: '/philosopher/platao'  },
        { nome: "Anaximandro", image: require('../assets/images/filosofos/anaximandro.png'), cover: require('../assets/images/covers/anaximandroCover.jpg'), rota: '/philosopher/socrates'  },
        { nome: "Anaximenes", image: require('../assets/images/filosofos/anaximenes.png'), cover: require('../assets/images/covers/anaximenesCover.jpg') },
        { nome: "Heraclito", image: require('../assets/images/filosofos/heraclito.png'), cover: require('../assets/images/covers/heraclitoCover.jpg') },
        { nome: "Pitagoras", image: require('../assets/images/filosofos/pitagoras.png'), cover: require('../assets/images/covers/pitagorasCover.jpg') },
    ];

    return (
        <SafeAreaView style={styles.container}>
           <View style={styles.superior}>
           <TouchableOpacity onPress={() => nav.goBack()} >
          <GenericIcons goBackIcon='arrow-left' />
          </TouchableOpacity>
            <Text style={{fontSize: 30, fontWeight: "bold", margin: 10}}>Filósofos Pré-Socráticos</Text>
           </View>
           
            <ScrollView>
            {filosofos.map((filosofo, index) => (
           
                <TouchableOpacity
                    key={index}
                    style={styles.imgFilosofoContainer}
                    onPress={() => router.replace(filosofo.rota)}
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
    superior: {
        backgroundColor: "#5271FF",
        height: 80,
        justifyContent: "center",
        alignItems: "center",
    },
//    filosofoContainer: {
//     activeOpacity: 1,
//    },
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
