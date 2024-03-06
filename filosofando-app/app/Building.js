import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from 'expo-router';
import { useState, useEffect } from 'react';
import TabBar from '../components/TabBarComp';
export default function Home() {

  const logo = require('../assets/images/logos/logoBranca.png');
 
  const nav = useNavigation();

    return (
      <View style={styles.container}>

        <StatusBar barStyle="light-content" backgroundColor="#131F24" />

        <View style={styles.superior}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.txtG}>Tela em Construção</Text>
        </View>
       
     

     

        <TabBar />

      </View>
    );
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    // width: "100%",
    //backgroundColor: '#5271FF',
    backgroundColor: '#131F24',
  },

 superior: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'red',
  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 15,
   
  },
  txtG: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },


});