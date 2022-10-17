import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

// import BottomTabNavigator from "../navigations/BottomTabNavigator";

const ProductDetailScreen = ({ navigation }) => {
	return (
		<View style={styles.center}>
			<Text>This is the ProductDetail Screen</Text>
			{/* <BottomTabNavigator/> Thêm Navigator ở đây thì không thể hiện được đúng*/}
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

export default ProductDetailScreen;
