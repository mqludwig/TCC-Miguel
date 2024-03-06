import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function SettingsIcons(props) {
    return (

        <View style={[styles.goBackIcon, { backgroundColor: props.backgroundColor }]}>
            <Icon name={props.settingsIcons} size={20} color='white' />
        </View>
    );
}

const styles = StyleSheet.create({
    goBackIcon: {
        paddingLeft: 10,
        borderRadius: 50,
        padding: 10,
        margin: 10,
    },
});