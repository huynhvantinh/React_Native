import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ListBlogScreen = ({ navigation }) => {
	return (
		<View style={styles.center}>
			<Text style={styles.text}>7_ListBlog Screen</Text>
			<Button title="8_OneBlog Screen" onPress={() => navigation.navigate("OneBlog")} />
		</View>
	);
};


export default ListBlogScreen;

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
