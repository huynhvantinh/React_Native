import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const OneCategoryScreen = ({ navigation }) => {
	return (
		<View style={styles.center}>
			<Text style={styles.text}>2_OneCategory Screen</Text>
			<Button title="3_ListProduct Screen" onPress={() => navigation.navigate("ListProduct")} />
		</View>
	);
};

export default OneCategoryScreen;

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center"
	},
    text: {
        fontSize: 30,
        fontWeight:'bold',
    }
});
