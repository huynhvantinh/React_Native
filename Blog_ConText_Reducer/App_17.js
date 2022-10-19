import React from "react";
import { Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";
import global_data from "./src/global_data";



/**
 * App_17.js - Thử nghiệm global data
 */

const navigator = createStackNavigator(
	{
		Screen1,
		Screen2
	},
	{
		initialRouteName: "Screen1",
		defaultNavigationOptions: {
			title: "Screen1"
		}
	}
);

const Router = createAppContainer(navigator); //createAppContainer(navigator) trả ra một react component - Xem video 5 bài 12

const App = () => {

	//Đây là function Component nên ở đây có thể initial cho các cấu hình Firebase
	React.useEffect(() => {
		console.log("global_data trong Trang App: ", global_data);
		global_data.data1 += " - XIN CHÀO";
		console.log("global_data trong Trang App: ", global_data);
		console.log("useEffect của Component App");
		return () => {
			
		};
	}, []);

	return (
		<Router />
	);
}

export default App;

/*OK export default () => {
	//Đây là function Component nên ở đây có thể initial cho các cấu hình Firebase
	React.useEffect(() => {
		console.log("useEffect của Component Root");
		return () => {
			
		};
	}, []);
	return (
		<BlogProvider>
			<Router />
		</BlogProvider>
	);
};*/
