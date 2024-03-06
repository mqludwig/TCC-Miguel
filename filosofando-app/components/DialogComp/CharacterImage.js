import { StyleSheet, View, Text } from 'react-native';
import { Asset, useAssets } from 'expo-asset';
import { Image } from 'expo-image';

export default (props) => {
    // const reqstr =  props.addressPicture || '../../assets/images/filosofos/tales.png'
    // const imgFilosofo = require(reqstr)
    //const [assets, error] = useAssets([require (reqstr)])

    return (
        <View style={styles.container}>
            {<Image
                source={props.addressPicture}
                style={styles.imagemFilosofo} />}
        </View>
    );
}
const styles = StyleSheet.create({

    imagemFilosofo: {
        width: 60,
        height: 60,
        resizeMode: "contain",
        borderRadius: 100,
    },

    container: {
        paddingLeft: 10,
        width: 60,
        height: 60,
        resizeMode: "contain",
    },
})