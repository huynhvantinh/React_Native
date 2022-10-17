import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const OneProductScreen = ({ navigation }) => {
	return (
		<View style={styles.center}>
			<Text style={styles.text}>4_OneProduct Screen</Text>

			{/* Các nút bấm thử nghiệm */}
			{/* Khi ở trang About mà trỏ tới NestedDrawer thì không hoạt động dược trong khi ở trang 4_OneProductScreen thì lại được */}
			<Button title="NestedDrawer - OK, còn bên trang About thì không" onPress={() => navigation.navigate("NestedDrawer")} />
			<Button title="AllCategoryDrawer" onPress={() => navigation.navigate("AllCategoryDrawer")} />
			<Button title="AllCategoryBlogDrawer" onPress={() => navigation.navigate("AllCategoryBlogDrawer")} />
		</View>
	);
};

export default OneProductScreen;

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

