import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import Swipe_Wraper from "../components/Swipe_Wraper";

const OneBlogTab2Screen = ({ navigation }) => {
	return (
		<Swipe_Wraper screen_left={1} screen_right={3}>
			<View style={styles.center}>
				<Text style={styles.text}>10_OneBlogTab2 Screen</Text>
			</View>
		</Swipe_Wraper>
	);
};

export default OneBlogTab2Screen;

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

