import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProductScreen from "../screens/ProductScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: "#5DD4F8"
	},
	headerTintColor: "white"
};

const BottomTabNavigator2 = () => {
	return (
		<Tab.Navigator screenOptions={screenOptionStyle}>
			<Tab.Screen name="ProductScreen" component={ProductScreen} />
			<Tab.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
		</Tab.Navigator>
	);
};

export default BottomTabNavigator2;
