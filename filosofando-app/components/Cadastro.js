import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
export default (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.texto}>
                <TextInput
                    value={props.text}
                    onChangeText={(text) => {
                        props.setText(text);
                    }}
                    placeholder={props.label}
                    paddingLeft={4}
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
        width: '70%',
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
        paddingLeft: 10,
        flex: 2,
        selectionColor: 'white'
    },

})