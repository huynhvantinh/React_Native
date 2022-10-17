import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const AllCategoryBlogScreen = ({ navigation }) => {
	return (
		<View style={styles.center}>
			<Text style={styles.text}>5_AllCategoryBlog Screen</Text>
			<Button title="6_OneCategoryBlog Screen" onPress={() => navigation.navigate("OneCategoryBlog")} />
		</View>
	);
};

export default AllCategoryBlogScreen;

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
