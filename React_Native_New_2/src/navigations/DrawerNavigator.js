import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AllCategoryScreen from "../screens/1_AllCategoryScreen";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";

import AllCategoryBlogScreen from "../screens/5_AllCategoryBlogScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator2 = () => {
	return (
		<Drawer.Navigator initialRouteName="AllCategoryDrawer">
			<Drawer.Screen name="AllCategoryDrawer" component={AllCategoryScreen}  options={{ title:"All Category" }}/>
			<Drawer.Screen name="AboutDrawer" component={AboutScreen} options={{ title:"About" }}/>
			<Drawer.Screen name="ContactDrawer" component={ContactScreen} options={{ title:"Contact" }}/>
		</Drawer.Navigator>
	);
};


const DrawerNavigator3 = () => {
	return (
		<Drawer.Navigator initialRouteName="AllCategoryDrawer">
			<Drawer.Screen name="AllCategoryDrawer" component={AllCategoryScreen}  options={{ title:"All Category" }}/>
			<Drawer.Screen name="AllCategoryBlogDrawer" component={AllCategoryBlogScreen} options={{ title:"All Category BLOG" }}/>
			<Drawer.Screen name="AboutDrawer" component={AboutScreen} options={{ title:"About" }}/>
			<Drawer.Screen name="ContactDrawer" component={ContactScreen} options={{ title:"Contact" }}/>
		</Drawer.Navigator>
	);
};

export { DrawerNavigator2, DrawerNavigator3 };
