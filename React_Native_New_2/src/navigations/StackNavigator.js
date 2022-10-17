import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllCategoryScreen from "../screens/1_AllCategoryScreen";
import OneCategoryScreen from "../screens/2_OneCategoryScreen";
import ListProductScreen from "../screens/3_ListProductScreen";
import OneProductScreen from "../screens/4_OneProductScreen";
import ContactDetailScreen from "../screens/ContactDetailScreen";

import AllCategoryBlogScreen from "../screens/5_AllCategoryBlogScreen";
import OneCategoryBlogScreen from "../screens/6_OneCategoryBlogScreen";
import ListBlogScreen from "../screens/7_ListBlogScreen";
import OneBlogScreen from "../screens/8_OneBlogScreen";

import { DrawerNavigator2, DrawerNavigator3 } from "./DrawerNavigator";
import { BottomTabNavigator1 } from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: "#9AC4F8"
	},
	headerTintColor: "white",
	headerBackTitle: "Back"
};

const StackNavigator1 = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="AllCategory" component={AllCategoryScreen} />
			<Stack.Screen name="OneCategory" component={OneCategoryScreen} />
			<Stack.Screen name="ListProduct" component={ListProductScreen} />
			<Stack.Screen name="OneProduct" component={OneProductScreen} />
		</Stack.Navigator>
	);
};

const StackNavigator2 = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="NestedDrawer" component={DrawerNavigator2} options={{ headerShown:false }}/>
			<Stack.Screen name="OneCategory" component={OneCategoryScreen} />
			<Stack.Screen name="ListProduct" component={ListProductScreen} />
			<Stack.Screen name="OneProduct" component={OneProductScreen} />
			{/* HAY - thêm ContactDetailScreen vô Stack nhưng lại được truy cập đến từ Screen Contact bên trong DrawerNavigator1 */}
			<Stack.Screen name="ContactDetail" component={ContactDetailScreen} />
		</Stack.Navigator>
	);
};

const StackNavigator3 = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="NestedDrawer" component={DrawerNavigator3} options={{ headerShown:false }}/>
			<Stack.Screen name="OneCategory" component={OneCategoryScreen} />
			<Stack.Screen name="ListProduct" component={ListProductScreen} />
			<Stack.Screen name="OneProduct" component={OneProductScreen} />
			{/* HAY - thêm ContactDetailScreen vô Stack nhưng lại được truy cập đến từ Screen Contact bên trong DrawerNavigator1 */}
			<Stack.Screen name="ContactDetail" component={ContactDetailScreen} />

			{/* Thêm các trang liên quan đến Blog vào trong stack */}
			{/* <Stack.Screen name="AllCategoryBlog" component={AllCategoryBlogScreen} /> KHÓA LẠI VẪN KHÔNG ĐỔI */}
			<Stack.Screen name="OneCategoryBlog" component={OneCategoryBlogScreen} />
			<Stack.Screen name="ListBlog" component={ListBlogScreen} />
			<Stack.Screen name="OneBlog" component={OneBlogScreen} />
		</Stack.Navigator>
	);
};

//kết hợp cả ba Navigator là Stack, Drawer và BottomTab (trong đó ở phần BottomTab có ứng dụng sự kiện swipe)
const StackNavigator5 = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="NestedDrawer" component={DrawerNavigator3} options={{ headerShown:false }}/>
			<Stack.Screen name="OneCategory" component={OneCategoryScreen} />
			<Stack.Screen name="ListProduct" component={ListProductScreen} />
			<Stack.Screen name="OneProduct" component={OneProductScreen} />
			{/* HAY - thêm ContactDetailScreen vô Stack nhưng lại được truy cập đến từ Screen Contact bên trong DrawerNavigator1 */}
			<Stack.Screen name="ContactDetail" component={ContactDetailScreen} />

			{/* Thêm các trang liên quan đến Blog vào trong stack */}
			{/* <Stack.Screen name="AllCategoryBlog" component={AllCategoryBlogScreen} /> KHÓA LẠI VẪN KHÔNG ĐỔI */}
			<Stack.Screen name="OneCategoryBlog" component={OneCategoryBlogScreen} />
			<Stack.Screen name="ListBlog" component={ListBlogScreen} />
			<Stack.Screen name="OneBlog" component={BottomTabNavigator1} />
		</Stack.Navigator>
	);
};



export { StackNavigator1, StackNavigator2, StackNavigator3, StackNavigator5 };
