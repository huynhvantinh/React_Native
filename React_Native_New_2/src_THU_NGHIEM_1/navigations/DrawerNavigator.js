import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator, ProductStackNavigator, StackNavigatorTest3 } from "./StackNavigator";
import { BottomTabNavigator } from "./BottomTabNavigator";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="HomeDrawer" component={BottomTabNavigator} />
			<Drawer.Screen name="ContactDrawer" component={ContactStackNavigator} />
		</Drawer.Navigator>
	);
};

const DrawerNavigator2 = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="ProductDrawer" component={ProductStackNavigator} />
			<Drawer.Screen name="ContactDrawer" component={ContactStackNavigator} />
		</Drawer.Navigator>
	);
};

const DrawerNavigator3 = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="ContactDrawer" component={ContactScreen} />
			{/* <Drawer.Screen name="ContactDrawer" component={ContactStackNavigator} /> */}
			<Drawer.Screen name="AboutDrawer" component={AboutScreen} />
		</Drawer.Navigator>
	);
};

export { DrawerNavigator, DrawerNavigator2, DrawerNavigator3 };
