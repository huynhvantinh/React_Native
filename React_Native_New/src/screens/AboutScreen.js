import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

// import BottomTabNavigator2 from "../navigations/BottomTabNavigator2";

const AboutScreen = () => {
	return (
		<View style={styles.center}>
			<Text>This is the About screen</Text>
			{/* <Button title="Go to Home Screen" /> */}            
			{/* <BottomTabNavigator2 /> */}
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

export default AboutScreen;
