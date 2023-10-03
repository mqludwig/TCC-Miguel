import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const HorizontalLine = () => {
  return (
    <View style={styles.horizontalLine}>
    <Text> aaaaaaaa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: 'white', // Cor da linha
    borderBottomWidth: 1,      // Largura da linha (pode ajustar conforme necessário)
    marginVertical: 10,        // Espaço vertical ao redor da linha (pode ajustar conforme necessário)
  },
});

export default HorizontalLine;