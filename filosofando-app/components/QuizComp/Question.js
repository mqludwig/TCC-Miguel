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
        marginTop: 90,
        marginBottom: 40,
        textAlign: "center",
     
       
    },
    questionText:{
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    paddingLeft: 13,
    
       
       
       
    },

})