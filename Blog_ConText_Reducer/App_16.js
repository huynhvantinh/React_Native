import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import DemoScreen from "./src/screens/DemoScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import global_data from "./src/global_data";


import {Provider as BlogProvider} from "./src/context/BlogContext/Blog_Context_UseReducer";


/**
 * App_16.js - Một cách triển khai file App mới
 * 
 * Dùng với src_16 - Tự làm - Nội dung xoay quanh bài 12, thử nghiệm Context kết hợp useReducer theo kiểu tách nhỏ ra và không truyền function dispatch 
 * xuống dưới và đưa các event listener từ component con được gọi bên trong các function ở trên Context/Provider luôn
 * - Cách làm này dễ maintain hơn vì tập trung mọi xử lí logic ở trong Context/Provider
 * - Cách 7 gọn hơn cách 8, 9 và 10
 * - Cách 11 Ok nhưng không gọn bằng cách 12
 * - Chọn cách 12 giống Stephen là chuẩn và gọn nhất
 * - Cách 13 cải tiến hơn cách 12 đó là tách form thành component riêng
 * - Cách 15 có bổ sung thêm từ cách 13 đó là dùng API bên ngoài để lấy và lưu dữ liệu - Dùng JSON server của npm
 * 
 * - App_16.js và src_16 chỉ là cách triển khi mới lạ hơn so với cách 15 thôi (vẫn phát triển từ cách 15 lên)
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

const Router = createAppContainer(navigator); //createAppContainer(navigator) trả ra một react component - Xem video 5 bài 12

const App = () => {

	//Đây là function Component nên ở đây có thể initial cho các cấu hình Firebase
	React.useEffect(() => {
		console.log("global_data trong Trang App: ", global_data);
		global_data.data1 += " - XIN CHÀO";
		console.log("useEffect của Component App");
		return () => {
			
		};
	}, []);

	return (
		<BlogProvider>
			<Router />
		</BlogProvider>
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
