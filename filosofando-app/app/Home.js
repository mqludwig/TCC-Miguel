import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions , AppRegistry} from 'react-native';
import { useFonts } from 'expo-font';
import Splash from './Splash';
import TabBar from '../components/TabBarComp';
import Swiper from 'react-native-swiper';
import { useNavigation } from 'expo-router';

export default function Home() {
  const [fontsLoaded] = useFonts({
    // Seus carregamentos de fontes aqui
  });

  const nav = useNavigation();


  const [atual, setAtual] = useState(0);

  const [data, setData] = React.useState([
    {id: 1, title: 'Unidade 1', subtitle:'Período Pré-Socrático', image: require('../assets/images/logos/presocraticos.png'), description: 'O nascimento da filosofia na Grécia Antiga, focando na exploração das origens e natureza do mundo através de ideias como os elementos naturais.' },
    {id: 2, title: 'Unidade 2', subtitle:'Período Clássico', image: require('../assets/images/logos/classicos.png'), description: 'A era de ouro da filosofia grega, destacando figuras como Sócrates, Platão e Aristóteles, que exploraram a ética, política e a busca pelo conhecimento.'},
    {id: 3, title: 'Unidade 3',  subtitle:'Período Helenístico', image: require('../assets/images/logos/helenisticos.png'), description: 'Uma época de difusão das filosofias gregas pelo vasto Império de Alexandre, o Grande, focando em filosofias pessoais, ética, e a busca pela felicidade em um mundo em transformação.'},
  ]);

  const _renderItem = (item) => {
    return (
      <View style={styles.slide} key={item.id-1+""}>
        <Image source={item.image} style={styles.imagemPrincipal} />
        <View style={styles.textos}>
          <Text style={styles.titulo}>{item.title}</Text>
          <Text style={styles.subtitulo}>{item.subtitle}</Text>
          <Text style={styles.descricao}>{item.description}</Text>
          <TouchableOpacity onPress={() => nav.navigate('Unit')}>
            <Text style={styles.botaoIniciarTexto}>INICIAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <View style={styles.superior}>
          <Text style={styles.nomeApp}>Filosofando</Text>
        </View>
        <Swiper
          autoplay={true}
          
          showsPagination={true}
          showsButtons={true}
          paginationStyle={{ bottom: 10 }}
          activeDotColor="#fff"
          onIndexChanged={(index) => {setAtual(index); console.log(atual)}}
          style={{ flex: 1 }}
        >
          {data.map(index => _renderItem(index))}
        </Swiper>
        <TabBar />
      </View>
    );
  } else {
    return <Splash />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11224d',
  },
  superior: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  nomeApp: {
    fontFamily: 'LilitaOne-Regular',
    fontSize: 27,
    color: 'white',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagemPrincipal: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: 30,
  },
  textos: {
    marginTop: 20,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#193a6f',
    borderRadius: 15,
    marginHorizontal: 30,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  descricao: {
    fontSize: 15,
    color: 'white',
    marginBottom: 10,
    textAlign: 'justify',
    marginBottom: 20,
  },
  botaoIniciarTexto: {
    backgroundColor: '#2c599d',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    borderRadius: 15,
    paddingHorizontal: 80,
    paddingVertical: 10,
    marginBottom: 20,
    textAlign: 'center',  
  },
});




