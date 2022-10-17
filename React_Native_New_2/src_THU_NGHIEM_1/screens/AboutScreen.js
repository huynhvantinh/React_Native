import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

// import BottomTabNavigator2 from "../navigations/BottomTabNavigator2";

const AboutScreen = ({navigation}) => {
	return (
		<View style={styles.center}>
			<Text>This is the About screen</Text>
			{/* <Button title="Go to Home Screen" /> */}            
			{/* <BottomTabNavigator2 /> Thêm Navigator ở đây thì không thể hiện được đúng*/}


			{/* các nút bấm này dành cho khi App.js dùng StackNavigatorTest3 */}
			<Button
				title="Go to Contact Screen - Không hoạt động"
				onPress={() => navigation.navigate("ContactStack")}
			/>
			<Button
				title="Go to ContactDrawer"
				onPress={() => navigation.navigate("ContactDrawer")}
			/>
			<Button
				title="Go to ContactDetails Screen"
				onPress={() => navigation.navigate("ContactDetailStack")}
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

export default AboutScreen;
