import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import Swipe_Wraper from "../components/Swipe_Wraper";

const OneBlogScreen = ({ navigation }) => {
	return (
		<Swipe_Wraper screen_left={0} screen_right={1}>
			<View style={styles.center}>
				<Text style={styles.text}>8_OneBlog Screen</Text>
			</View>
		</Swipe_Wraper>
	);
};

export default OneBlogScreen;

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

