import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MainStackNavigator, ContactStackNavigator, StackNavigatorTest, StackNavigatorTest2, StackNavigatorTest3 } from "./src/navigations/StackNavigator";
import {BottomTabNavigator, BottomTabNavigator2} from './src/navigations/BottomTabNavigator';
import { DrawerNavigator, DrawerNavigator2, DrawerNavigator3 } from "./src/navigations/DrawerNavigator";

const App = () => {
	return (
		<NavigationContainer>
            {/* Chỉ bật 1 trong 3 */}
			{/* <MainStackNavigator/> */}
			{/* <ContactStackNavigator/> */}
            {/* <BottomTabNavigator/> */}
            {/* <BottomTabNavigator2/> */}
            {/* <DrawerNavigator /> */}
            {/* <DrawerNavigator2 /> */}
            {/* <DrawerNavigator3 /> */}

            {/* <StackNavigatorTest /> */}
            {/* <StackNavigatorTest2 /> */}
            
            {/* Hay Dùng - Cách dưới mới là hay dùng*/}
            <StackNavigatorTest3 />
            
		</NavigationContainer>
	);
};
export default App;


/**
 * Thử nghiệm React Navigation -  kết hợp cả ba navigator là native-stack (hoặc stack), buttontab và drawer
 * https://dev.to/easybuoy/combining-stack-tab-drawer-navigations-in-react-native-with-react-navigation-5-da
 */
