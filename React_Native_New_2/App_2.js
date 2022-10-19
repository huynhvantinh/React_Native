import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

/** 
 * App_2.js - Kết hợp 2 Drawer Navigator bên phải và trái
 * https://reactnavigation.org/docs/multiple-drawers/
 */

function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Button onPress={() => navigation.openDrawer()} title="Open drawer" />
		</View>
	);
}

const LeftDrawer = createDrawerNavigator();

const LeftDrawerScreen = () => {
	return (
		<LeftDrawer.Navigator screenOptions={{ drawerPosition: "left" }}>
			<LeftDrawer.Screen name="Home" component={HomeScreen} />
		</LeftDrawer.Navigator>
	);
};

const RightDrawer = createDrawerNavigator();

const RightDrawerScreen = () => {
	return (
		<RightDrawer.Navigator screenOptions={{ 
                drawerPosition: "right", 
                // headerShown: false 
            }} 
        >
			<RightDrawer.Screen name="HomeDrawer" component={LeftDrawerScreen}/>
		</RightDrawer.Navigator>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<RightDrawerScreen />
		</NavigationContainer>
	);
}
