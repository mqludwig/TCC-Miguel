import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import Icons from '../components/HomeComp/Icons';
import { useNavigation } from 'expo-router';

export default (props) => {

  const nav = useNavigation();

  return (

    <View style={styles.tabBar}>
      <TouchableOpacity onPress={() => nav.navigate('Home')} >
        <Icons icon='home' />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => nav.navigate('Profile')} >
        <Icons icon='user-circle' />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => nav.navigate('About')} >
        <Icons icon='info-circle' />
      </TouchableOpacity>
      {props.tabBar}

    </View >
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    // flexDirection: "column",
    // width: "100%",
    //backgroundColor: '#5271FF',
    backgroundColor: 'black'
  },

  tabBar: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopWidth: 0.2,
    borderTopColor: 'white',
  },
});