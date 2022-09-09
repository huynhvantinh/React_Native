import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
    console.log("React Native nha")
    return <Text style={styles.text}>Hi HomeScreen. Chào Bạn đến với ứng dụng học tiếng Anh TOBE Nha!</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
