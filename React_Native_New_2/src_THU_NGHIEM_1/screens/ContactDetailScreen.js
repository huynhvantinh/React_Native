import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ContactDetailScreen = ({ navigation }) => {
	return (
		<View style={styles.center}>
			<Text>This is the ContactDetail Screen</Text>

			{/* các nút bấm này dành cho khi App.js dùng StackNavigatorTest3 */}
			<Button
				title="Go to ContactDrawer"
				onPress={() => navigation.navigate("ContactDrawer")}
			/>
			<Button
				title="Go to AboutDrawer"
				onPress={() => navigation.navigate("AboutDrawer")}
			/>
			
		</View>
	);
};

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center"
	}
});

export default ContactDetailScreen;
