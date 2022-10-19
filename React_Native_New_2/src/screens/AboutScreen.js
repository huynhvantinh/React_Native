import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";


const AboutScreen = ({navigation}) => {
	return (
		<View style={styles.center}>
			<Text style={styles.text}>About screen</Text>
			
			{/* Các nút bấm thử nghiệm */}
			{/* Khi ở trang About mà trỏ tới NestedDrawer thì không hoạt động dược trong khi ở trang 4_OneProductScreen thì lại được */}
			<Button title="NestedDrawer - KHÔNG HOẠT ĐỘNG" onPress={() => navigation.navigate("NestedDrawer")} />
			<Button title="AllCategoryDrawer" onPress={() => navigation.navigate("AllCategoryDrawer")} />
			<Button title="AllCategoryBlogDrawer" onPress={() => navigation.navigate("AllCategoryBlogDrawer")} />
			<Button title="ListProduct" onPress={() => navigation.navigate("ListProduct")} />
			<Button title="Open Drawer" onPress={() => navigation.openDrawer() } />
			<Button title="Open Parent Drawer - Bị lỗi khi mở trang About từ Drawer Cha" onPress={() => navigation.getParent().openDrawer() } />			
		</View>
	);
};

export default AboutScreen;

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
