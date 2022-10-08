import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import DemoScreen from "./src/screens/DemoScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";


import {Provider as BlogProvider} from "./src/context/BlogContext/Blog_Context_UseReducer";


/**
 * Dùng với src_13 - Tự làm - Nội dung xoay quanh bài 12, thử nghiệm Context kết hợp useReducer theo kiểu tách nhỏ ra và không truyền function dispatch 
 * xuống dưới và đưa các event listener từ component con được gọi bên trong các function ở trên Context/Provider luôn
 * - Cách làm này dễ maintain hơn vì tập trung mọi xử lí logic ở trong Context/Provider
 * - Cách 7 gọn hơn cách 8, 9 và 10
 * - Cách 11 Ok nhưng không gọn bằng cách 12
 * - Chọn cách 12 giống Stephen là chuẩn và gọn nhất
 * - Cách 13 cải tiến hơn cách 12 đó là tách form thành component riêng
 */

const navigator = createStackNavigator(
	{
		Index: IndexScreen,
		Show: ShowScreen,
		Create: CreateScreen,
		Edit: EditScreen,
		Demo: DemoScreen
	},
	{
		// initialRouteName: "Index",
		initialRouteName: "Demo",
		defaultNavigationOptions: {
			title: "Blogs (Trang Index)"
		}
	}
);

const App = createAppContainer(navigator); //createAppContainer(navigator) trả ra một react component - Xem video 5 bài 12

export default () => {
	return (
		<BlogProvider>
			<App />
		</BlogProvider>
	);
};
