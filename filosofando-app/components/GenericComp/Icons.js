import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default (props) => {
    const iconSize = props.size ? props.size : 40;
    const iconColor = props.color ? props.color : '#8F8E8E';

    return (
        <View>
            <Icon name={props.icon} size={iconSize} color={iconColor} />
        </View>
    );
}