import { Text, View, Image, StyleSheet } from "react-native";


export default function Splash() {
  const imagem = require('../assets/images/logos/logo.png');

  return (
    <View style={styles.container}>
      <View style={styles.centro}>
        <Image source={imagem} style={styles.imagem} />
      </View>
      <View style={styles.txtbottom}>
      <Text style={styles.txtM}>Queijo Productions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  centro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  txtbottom: {
    marginBottom: 16,
  
  },

  txtM:{
    fontSize: 18,
    textAlign: "center"
},
  
  imagem: {
    width: 150,
    height: 150,
  },
});
