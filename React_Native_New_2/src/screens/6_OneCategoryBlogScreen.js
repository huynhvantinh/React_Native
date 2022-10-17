import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const OneCategoryBlogScreen = ({ navigation }) => {
	return (
		<View style={styles.center}>
			<Text style={styles.text}>6_OneCategoryBlog Screen</Text>
			<Button title="7_ListBlog Screen" onPress={() => navigation.navigate("ListBlog")} />
		</View>
	);
};

export default OneCategoryBlogScreen;

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
