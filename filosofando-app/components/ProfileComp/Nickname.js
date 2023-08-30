import { StyleSheet, View, Text} from 'react-native';
export default (props) => {
    
    
    return(
        <View style={styles.container}>

            <Text style={styles.nickname}>{props.nick}</Text>
           
        </View>
    );
}
const styles = StyleSheet.create({
   
    nickname:{
        color: 'white',
        fontSize: 20,
       
    },

})