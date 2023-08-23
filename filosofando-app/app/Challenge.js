import React from "react";
import { ImageBackground, Image, StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";

const Welcome = () => {

    return (

        <SafeAreaView style={styles.container}>
            
                <SafeAreaView style={styles.superior}>
                    <Text style={styles.fontSuperior}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum vitae magna a ornare. </Text>
                </SafeAreaView>
                <SafeAreaView style={styles.centro}>
                <TouchableOpacity style={styles.botaoBranco} onPress={() => Alert.alert('Simple Button pressed')}>
                        <Text style={styles.botaoTexto}>Opção Opção Opção 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoBranco} onPress={() => Alert.alert('Simple Button pressed')}>
                        <Text style={styles.botaoTexto}>Opção Opção Opção 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoBranco} onPress={() => Alert.alert('Simple Button pressed')}>
                        <Text style={styles.botaoTexto}>Opção Opção Opção 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoBranco} onPress={() => Alert.alert('Simple Button pressed')}>
                        <Text style={styles.botaoTexto}>Opção Opção Opção 4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoBranco} onPress={() => Alert.alert('Simple Button pressed')}>
                        <Text style={styles.botaoTexto}>Opção Opção Opção 5</Text>
                    </TouchableOpacity>
                    
                </SafeAreaView>

                <SafeAreaView style={styles.inferior}>
                   
                </SafeAreaView>

          
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        flex: 1,
        flexDirection: "column",
        width: "100%",
   
    },
    superior: {
        marginTop: 90,
        marginBottom: 40,
        textAlign: "center",
    },
    centro: {
        marginBottom: 90,
        alignItems: "center",
    },
    inferior: {
        marginBottom: 20,
        textAlign: "center",
    },

    botaoBranco: {
        backgroundColor: "white",
        borderRadius: 10,
        width: 350,
        height: 40,
        margin: 17,
        padding: 8,
        textAlign: "center",
       

    },

    botaoTexto: {
        fontSize: 15,
        fontWeight: "bold",

    },
    fontSuperior: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        paddingLeft: 13,
    },







});

export default Welcome;