import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ContactScreen = ({ navigation }) => {
	return (
		<View style={styles.center}>
			<Text style={styles.text}>Contact Screen</Text>
			<Button title="ContactDetails Screen" onPress={() => navigation.navigate("ContactDetail")} />
		</View>
	);
};

export default ContactScreen;

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center"
	},
	text: {
		fontSize: 30,
		fontWeight: "bold"
	}
});
