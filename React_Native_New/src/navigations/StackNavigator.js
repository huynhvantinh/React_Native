import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createStackNavigator } from "@react-navigation/stack"; //Nếu dùng thư viện stack thay cho native-stack

import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";
import ContactDetailScreen from "../screens/ContactDetailScreen";
import ProductScreen from "../screens/ProductScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";

import {BottomTabNavigator2, BottomTabNavigator3} from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: "#9AC4F8"
	},
	headerTintColor: "white",
	headerBackTitle: "Back"
};

const MainStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="About" component={AboutScreen} />
		</Stack.Navigator>
	);
};

const ContactStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Contact" component={ContactScreen} />
			<Stack.Screen name="ContactDetail" component={ContactDetailScreen} />
		</Stack.Navigator>
	);
};


const ProductStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Product" component={ProductScreen} />
			<Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
		</Stack.Navigator>
	);
};


//Đây được xem là nest Navigator: có BottomTabNavigator2 là một screen của Stack Navigator
const StackNavigatorTest = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Test" component={BottomTabNavigator2} />
			<Stack.Screen name="HomeTest" component={HomeScreen} />
		</Stack.Navigator>
	);
};

//Đây được xem là nest Navigator: có BottomTabNavigator2 là một screen của Stack Navigator
const StackNavigatorTest2 = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Test" component={BottomTabNavigator3} />
			<Stack.Screen name="HomeTest" component={HomeScreen} />
		</Stack.Navigator>
	);
};

export { MainStackNavigator, ContactStackNavigator, ProductStackNavigator, StackNavigatorTest, StackNavigatorTest2 };
