import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Demo1 from "../components/Demo1";

const ComponentsScreen = () => {
    const name = "Stephen";

    return (
        <View>
            <Text style={styles.textStyle}>5. Đây là ComponentsScreen!</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>
            <Demo1/>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;
