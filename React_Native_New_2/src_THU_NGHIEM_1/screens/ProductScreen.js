import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ProductScreen = ({ navigation }) => {
	return (
		<View style={styles.center}>
			<Text>This is the Product Screen</Text>
			<Button
				title="Go to ProductDetail Screen"
				onPress={() => navigation.navigate("ProductDetailStack")} 
			/>
            <Button
				title="Go to Home Screen"
				onPress={() => navigation.navigate("HomeTestStack")}
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

export default ProductScreen;
