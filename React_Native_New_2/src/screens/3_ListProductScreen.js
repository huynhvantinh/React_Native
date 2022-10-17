import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ListProductScreen = ({ navigation }) => {
	return (
		<View style={styles.center}>
			<Text style={styles.text}>3_ListProduct Screen</Text>
			<Button title="4_OneProduct Screen" onPress={() => navigation.navigate("OneProduct")} />
		</View>
	);
};


export default ListProductScreen;

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
