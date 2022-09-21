import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <Text style={styles.textOneStyle} >Text 1111</Text>
            <Text style={styles.textTwoStyle} >Text 2</Text>
            <Text style={styles.textThreeStyle} >Text 333</Text>
        </View>
    );
};


console.log(StyleSheet.absoluteFillObject);

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 10,
        borderColor: "black",
        height: 500,

        // flexDirection: "column",
        // flexDirection: "row",
        alignItems: "stretch",
        // alignItems: "center",
        // justifyContent: "space-between",
        // justifyContent: "center",

        position: 'relative',
        // position: 'absolute',
    },

    textOneStyle: {
        borderWidth: 3,
        borderColor: "red",
        backgroundColor: "cyan",

        height: 50,
        width: 50,

        // flex: 0,
        // flex: 1,
        // alignSelf: "stretch"

    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: "green",
        backgroundColor: "purple",

        height: 50,
        width: 50,
        
        // flex: 0,
        // flex: 1,
        // alignSelf: "stretch",
        alignSelf: "center",

        // position: 'absolute',
        // // top: 50,
        // // bottom: 50
        // top: 0,
        // bottom: 0,
        // right: 0,
        // left: 0,
        // zIndex:1
        // ...StyleSheet.absoluteFillObject

    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: "blue",
        backgroundColor: "yellow",

        height: 50,
        width: 50,

        // flex: 0,
        // flex: 1,
        // alignSelf: "stretch"

        position: 'absolute',
        top: 0,
        right: 0

    }
});

export default BoxScreen;
