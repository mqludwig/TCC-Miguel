import { Text, View, Image, StyleSheet } from "react-native";
import Estilo from '../components/estilo';

export default function Splash() {
  const imagem = require('../assets/logo.png');

  return (
    <View style={styles.container}>
      <View style={styles.centro}>
        <Image source={imagem} style={styles.imagem} />
      </View>
      <View style={styles.txtbottom}>
      <Text style={Estilo.txtM}>Queijo Productions</Text>
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
  
  imagem: {
    width: 150,
    height: 150,
  },
});
