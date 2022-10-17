import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StackNavigator1, StackNavigator2, StackNavigator3, StackNavigator5 } from "./src/navigations/StackNavigator";
import SwipeEvent from "./src/screens/SwipeEvent";

const App = () => {
	return (
		<NavigationContainer>
            {/* <StackNavigator1/> */}

            {/* Hay Dùng */}
            {/* <StackNavigator2/> */}
            {/* <StackNavigator3/> */}

            {/* HAY - kết hợp cả ba Navigator là Stack, Drawer và BottomTab (trong đó ở phần BottomTab có ứng dụng sự kiện swipe) */}
            <StackNavigator5/>
            {/* <SwipeEvent/> */}
		</NavigationContainer>
	);
};
export default App;


/**
 * Thử nghiệm React Navigation -  kết hợp cả ba navigator là native-stack (hoặc stack), buttontab và drawer
 * https://dev.to/easybuoy/combining-stack-tab-drawer-navigations-in-react-native-with-react-navigation-5-da
 */
