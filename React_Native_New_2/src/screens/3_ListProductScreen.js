import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ListProductScreen = ({ navigation }) => {

	// for (let index = 0; index < 1000; index++) {
	// 	const date = new Date()
	// 	console.log(date);
	// }

	//Video 013 Bài 16, tại sao khi set title cho header lại phải để bên trong useLayoutEffect mà không dùng trực tiếp bên trong Component luôn
	// React.useEffect(() => {
	React.useLayoutEffect(() => {
		for (let index = 0; index < 10000; index++) {
			const date = new Date()
			console.log(date);
		}
		navigation.setOptions({
			title:"hohohooh"
		});
		return () => {
			
		};
	}, []);
	return (
		<View style={styles.center}>
			<Text style={styles.text}>3_ListProduct Screen</Text>
			<Button title="4_OneProduct Screen" onPress={() => navigation.navigate("OneProduct")} />
		</View>
	);
};


export default ListProductScreen;

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
