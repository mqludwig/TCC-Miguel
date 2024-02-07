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
        marginTop: 50,
        textAlign: "center",
        alignContent: "center",
        alignItems: "center",
    },
   questionText:{
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginHorizontal: 10,
   },

})