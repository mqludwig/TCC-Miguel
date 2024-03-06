import { StyleSheet, View, Text } from 'react-native';
export default (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.nome}>{props.NameChar}</Text>
        </View>
    );
}
const styles = StyleSheet.create({

    nome: {
        paddingLeft: 20,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
})