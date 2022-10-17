import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import Swipe_Wraper from "../components/Swipe_Wraper";

const OneBlogTab1Screen = ({ navigation }) => {
	return (
		<Swipe_Wraper screen_left={0} screen_right={2}>
			<View style={styles.center}>
				<Text style={styles.text}>9_OneBlogTab1 Screen</Text>

				<Button title="OneProduct - navigate" onPress={() => navigation.navigate("OneProduct")} />
				<Button title="OneBlogTab0 - navigate" onPress={() => navigation.navigate("OneBlogTab0")} />
				<Button title="OneBlogTab0" onPress={() => navigation.jumpTo("OneBlogTab0")} />
				<Button title="OneBlogTab2" onPress={() => navigation.jumpTo("OneBlogTab2")} />
				<Button title="OneBlogTab3" onPress={() => navigation.jumpTo("OneBlogTab3")} />
			</View>
		</Swipe_Wraper>
	);
};

export default OneBlogTab1Screen;

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

