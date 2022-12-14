import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MainStackNavigator, ContactStackNavigator, StackNavigatorTest, StackNavigatorTest2 } from "./src/navigations/StackNavigator";
import {BottomTabNavigator, BottomTabNavigator2} from './src/navigations/BottomTabNavigator';
import { DrawerNavigator } from "./src/navigations/DrawerNavigator";

const App = () => {
	return (
		<NavigationContainer>
            {/* Chỉ bật 1 trong 3 */}
			{/* <MainStackNavigator/> */}
			{/* <ContactStackNavigator/> */}
            {/* <BottomTabNavigator/> */}
            {/* <BottomTabNavigator2/> */}
            {/* <StackNavigatorTest /> */}
            <StackNavigatorTest2 />
            {/* <DrawerNavigator /> */}
		</NavigationContainer>
	);
};
export default App;


/**
 * Thử nghiệm React Navigation -  kết hợp cả ba navigator là native-stack (hoặc stack), buttontab và drawer
 * https://dev.to/easybuoy/combining-stack-tab-drawer-navigations-in-react-native-with-react-navigation-5-da
 */
