import { StyleSheet, View, Text } from 'react-native';
import { collection, query, where } from "firebase/firestore";
import { db } from "../../connections_miguel/firebase-app";
import { useState, useEffect } from 'react';

export default (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.nickname}>{props.nick}</Text>
        </View>
    );
}
const styles = StyleSheet.create({

    nickname: {
        color: 'white',
        fontSize: 20,
    },
})