import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { useState } from 'react';
export default (props) => {

    const [hydePass, setHidePass] = useState(true);

    return (
        <View style={styles.container}>

            <View style={styles.texto}>
                <TextInput value={props.email} 
                onChangeText={(text) => props.setText(text)} 
                placeholder={props.label} 
                keyboardType='email-address' 
                autoCapitalize="none" 
                placeholderTextColor={'rgba(0, 0, 0,0.6)'} 
                color='black' ></TextInput>
            </View>
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

    texto: {
        color: 'white',
        paddingBottom: 0,
        paddingLeft: 4,
        paddingTop: 3,
        flex: 2,
        selectionColor: 'white'
    },

})