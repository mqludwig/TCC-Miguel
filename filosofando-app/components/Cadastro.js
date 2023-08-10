import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
export default (props) => {

    return(
        <View style={styles.container}>
            <View style={styles.texto}>
            <TextInput placeholder = {props.label}  paddingLeft={4} placeholderTextColor={'white'} color='white' ></TextInput>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: '9%',
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 20,
        marginBottom: 15
    },

    texto:{
        color: 'white',
        paddingBottom: 0,
        //paddingLeft:4,
        //paddingTop:0,
        flex:2,
        selectionColor: 'white'



    },

})
