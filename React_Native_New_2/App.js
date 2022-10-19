import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StackNavigator1, StackNavigator2, StackNavigator3, StackNavigator5, StackNavigator6, StackNavigator7 } from "./src/navigations/StackNavigator";
import SwipeEvent from "./src/screens/SwipeEvent";


/**
 * App_1.js 
 * Thử nghiệm React Navigation -  kết hợp cả ba navigator là native-stack (hoặc stack), buttontab và drawer
 * https://reactnavigation.org/docs/multiple-drawers/
 * https://dev.to/easybuoy/combining-stack-tab-drawer-navigations-in-react-native-with-react-navigation-5-da
 * 
 * Tham khảo thêm các template ở đây:
 * https://reactnavigation.org/docs/multiple-drawers/
 * https://reactnavigation.org/docs/nesting-navigators/#passing-params-to-a-screen-in-a-nested-navigator
 * https://reactnativeexample.com/tag/drawer/
 * https://reactnativeexample.com/react-native-two-drawer-navigator/
 */


const App = () => {
	return (
        <NavigationContainer>
            {/* <SwipeEvent/> Thử nghiệm chức năng nhận diện Swipe Event*/}

            {/* <StackNavigator1/> */}

            {/* Hay Dùng */}
            {/* <StackNavigator2/> */}
            {/* <StackNavigator3/> */}

            {/* HAY - kết hợp cả ba Navigator là Stack, Drawer và BottomTab (trong đó ở phần BottomTab có ứng dụng sự kiện swipe) */}
            {/* <StackNavigator5/> */}
            {/* <StackNavigator6/> */}
            <StackNavigator7/>
                        
		</NavigationContainer>
	);
};
const App1 = () => {
	return React.createElement(NavigationContainer, null, React.createElement(StackNavigator7, null));
};
// export default App;//OK
export default App1;//OK


