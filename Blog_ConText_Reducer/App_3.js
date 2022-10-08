import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import DemoScreen from "./src/screens/DemoScreen";
import CreateScreen from "./src/screens/CreateScreen";


import {BlogProviderUseState} from "./src/context/Blog_Context_UseState";


/**
 * Dùng với src_3 - Tự làm - Nội dung xoay quanh bài 12, thử nghiệm Context kết hợp useState
 */

const navigator = createStackNavigator(
	{
		Index: IndexScreen,
		Show: ShowScreen,
		Create: CreateScreen,
		Demo: DemoScreen
	},
	{
		initialRouteName: "Index",
		// initialRouteName: "Show",
		// initialRouteName: "Demo",
		defaultNavigationOptions: {
			title: "Blogs (Trang Index)"
		}
	}
);

const App = createAppContainer(navigator); //createAppContainer(navigator) trả ra một react component - Xem video 5 bài 12

export default () => {
	return (
		<BlogProviderUseState>
			<App />
			{/* { createAppContainer(navigator)} KHÔNG ĐƯỢC */}
		</BlogProviderUseState>
	);
};
