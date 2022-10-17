import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
import ProductScreen from "../screens/ProductScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import { ProductStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: "#5DD4F8"
	},
	headerTintColor: "white"
};

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator screenOptions={screenOptionStyle}>
			<Tab.Screen name="HomeTab" component={MainStackNavigator} />
			<Tab.Screen name="ContactTab" component={ContactStackNavigator} />
		</Tab.Navigator>
	);
};


const screenOptionStyle2 = {
	headerStyle: {
		backgroundColor: "#5DD4F8"
	},
	headerTintColor: "white"
};

const BottomTabNavigator2 = () => {
	return (
		<Tab.Navigator screenOptions={screenOptionStyle2}>
			<Tab.Screen name="ProductScreenTab" component={ProductScreen} />
			<Tab.Screen name="ProductDetailScreenTab" component={ProductDetailScreen} />
		</Tab.Navigator>
	);
};

const BottomTabNavigator3 = () => {
	return (
		<Tab.Navigator screenOptions={screenOptionStyle2}>
			<Tab.Screen name="ProductScreenTab" component={ProductScreen} />
			<Tab.Screen name="ProductScreenTab2" component={ProductStackNavigator} />
			<Tab.Screen name="ProductDetailScreenTab" component={ProductDetailScreen} />
		</Tab.Navigator>
	);
};

export {BottomTabNavigator, BottomTabNavigator2, BottomTabNavigator3};
