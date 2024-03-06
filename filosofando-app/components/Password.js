import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useState } from 'react';
export default (props) => {

    const [hidePass, setHidePass] = useState(true);

    return (
        <View style={styles.container}>

            <View style={styles.texto}>
                <TextInput placeholder={props.labelpass}
                    placeholderTextColor={'rgba(0, 0, 0,0.6)'}
                    color='black'
                    value={props.pass}
                    onChangeText={(text) => props.setSenha(text)}
                    secureTextEntry={hidePass}
                />

            </View>
            <TouchableOpacity style={styles.senhaVisivel} onPress={() => setHidePass(!hidePass)}>
                {hidePass ?
                    <Icon name='eye' size={20} color='black' />
                    :
                    <Icon name='eye-slash' size={20} color='black' />
                }

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        height: '15%',
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 20,
        marginBottom: 15,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        borderRadius: 15,
    },

    senhaVisivel: {
        marginLeft: 7
    },

    texto: {
        color: 'white',
        paddingBottom: 0,
        paddingLeft: 4,
        paddingTop: 3,
        flex: 2,
        selectionColor: 'white'

    },
})