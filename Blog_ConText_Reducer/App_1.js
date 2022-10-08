import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";

/**
 * Dùng với src_1 - Copy Bài của Stephen ở Cuối bài 12, chưa dùng đến API
 */


const navigator = createStackNavigator(
	{
		Index: IndexScreen,
		Show: ShowScreen,
		Create: CreateScreen
	},
	{
		initialRouteName: "Index",
		defaultNavigationOptions: {
			title: "Blogs"
		}
	}
);

const App = createAppContainer(navigator); //createAppContainer(navigator) trả ra một react component - Xem video 5 bài 12

export default () => {
	return (
		<Provider>
			<App />
		</Provider>
	);
};
