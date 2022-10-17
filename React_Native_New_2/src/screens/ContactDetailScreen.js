import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ContactDetailScreen = ({ navigation }) => {
	return (
		<View style={styles.center}>
			<Text style={styles.text}>This is the ContactDetail Screen</Text>			
		</View>
	);
};

export default ContactDetailScreen;

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center"
	},
	text: {
        fontSize: 20,
        fontWeight:'bold',
    }
});

