import { StyleSheet, View, Text} from 'react-native';
export default (props) => {
    
    return(
              <View style={styles.questionView}>
            <Text style={styles.questionText}>{props.Question}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    questionView:{
        marginTop: 70,
        marginBottom: 30,
        paddingBottom: 8,
        textAlign: "center",
        alignContent: "center",
        alignItems: "center",
    },
   questionText:{
    fontSize: 23,
    color: "black",
    fontWeight: "bold",   
    textAlign: "center",
   },

})