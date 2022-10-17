import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const AllCategoryScreen = ({ navigation }) => {
	return (
		<View style={styles.center}>
			<Text style={styles.text}>1_AllCategory Screen</Text>
			<Button title="2_OneCategory Screen" onPress={() => navigation.navigate("OneCategory")} />
		</View>
	);
};

export default AllCategoryScreen;

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
