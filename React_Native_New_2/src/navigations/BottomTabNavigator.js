import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import OneBlogScreen from "../screens/8_OneBlogScreen";
import OneBlogTab1Screen from "../screens/9_OneBlogTab1Screen";
import OneBlogTab2Screen from "../screens/10_OneBlogTab2Screen";
import OneBlogTab3Screen from "../screens/11_OneBlogTab3Screen";

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: "#5DD4F8"
	},
	headerTintColor: "white",
	headerShown:false
};

const BottomTabNavigator1 = () => {
	return (
		// <Tab.Navigator screenOptions={screenOptionStyle} screenOptions={{ headerShown:false }}>
		<Tab.Navigator screenOptions={screenOptionStyle}>
			<Tab.Screen name="OneBlogTab0" component={OneBlogScreen} />
			<Tab.Screen name="OneBlogTab1" component={OneBlogTab1Screen} />
			<Tab.Screen name="OneBlogTab2" component={OneBlogTab2Screen} />
			<Tab.Screen name="OneBlogTab3" component={OneBlogTab3Screen} />
		</Tab.Navigator>
	);
};



export { BottomTabNavigator1 };
