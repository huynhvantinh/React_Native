import React from "react";
import { Button, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AllCategoryScreen from "../screens/1_AllCategoryScreen";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";

import AllCategoryBlogScreen from "../screens/5_AllCategoryBlogScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator2 = () => {
	return (
		<Drawer.Navigator initialRouteName="AllCategoryDrawer">
			<Drawer.Screen name="AllCategoryDrawer" component={AllCategoryScreen}  options={{ title:"All Category" }}/>
			<Drawer.Screen name="AboutDrawer" component={AboutScreen} options={{ title:"About" }}/>
			<Drawer.Screen name="ContactDrawer" component={ContactScreen} options={{ title:"Contact" }}/>
		</Drawer.Navigator>
	);
};


const DrawerNavigator3 = () => {
	return (
		// <Drawer.Navigator initialRouteName="AllCategoryDrawer" drawerType="slide" drawerContent={() => <Text>hihi</Text>}
		// 	screenOptions={{
		// 		drawerPosition:"right",
		// 		drawerType:"slide"
		// 	}}
		// >
		<Drawer.Navigator initialRouteName="AllCategoryDrawer">
			<Drawer.Screen name="AllCategoryDrawer" component={AllCategoryScreen}  options={{ title:"All Category" }}/>
			<Drawer.Screen name="AllCategoryBlogDrawer" component={AllCategoryBlogScreen} options={{ title:"All Category BLOG" }}/>
			<Drawer.Screen name="AboutDrawer" component={AboutScreen} options={{ title:"About" }}/>
			<Drawer.Screen name="ContactDrawer" component={ContactScreen} options={{ title:"Contact" }}/>
		</Drawer.Navigator>
	);
};

const DrawerNavigatorRIGHT = () => {
	return (
		<Drawer.Navigator initialRouteName="AllCategoryDrawer"
			screenOptions={{
				drawerPosition:"right",
				headerShown:false
			}}
		>
			<Drawer.Screen name="AllCategoryDrawer" component={AllCategoryScreen}  options={{ title:"All Category" }}/>
			<Drawer.Screen name="AboutDrawer" component={AboutScreen} options={{ title:"About" }}/>
		</Drawer.Navigator>
	);
};
const DrawerNavigator6 = () => {
	return (
		<Drawer.Navigator initialRouteName="AllCategoryDrawer">
			<Drawer.Screen name="AllCategoryDrawer" component={DrawerNavigatorRIGHT}  options={{ title:"All Category" }}/>
			<Drawer.Screen name="AllCategoryBlogDrawer" component={AllCategoryBlogScreen} options={{ title:"All Category BLOG" }}/>
			<Drawer.Screen name="AboutDrawer" component={AboutScreen} options={{ title:"About" }}/>
			<Drawer.Screen name="ContactDrawer" component={ContactScreen} options={{ title:"Contact" }}/>
		</Drawer.Navigator>
	);
};

const DrawerNavigator7 = () => {
	return (
		<Drawer.Navigator initialRouteName="AllCategoryDrawer"
			screenOptions={({ navigation, route })=>({
				headerRight: ()=>{
					return (
						<>
							<Button title="Con" onPress={()=> navigation.openDrawer()}/>
							<Button title="Parent" onPress={()=> navigation.getParent().openDrawer()}/>
						</>
					)
				}
				
			})}
		>
		{/* <Drawer.Navigator initialRouteName="AllCategoryDrawer"> */}
			<Drawer.Screen name="AllCategoryDrawer" component={AllCategoryScreen}  options={{ title:"All Category 7",
				// headerRight: ()=>{return <Button title="open"/>}
			}}/>
			<Drawer.Screen name="AllCategoryBlogDrawer" component={AllCategoryBlogScreen} options={{ title:"All Category BLOG" }}/>
			<Drawer.Screen name="AboutDrawer" component={AboutScreen} options={{ title:"About" }}/>
			<Drawer.Screen name="ContactDrawer" component={ContactScreen} options={{ title:"Contact" }}/>
		</Drawer.Navigator>
	);
};

const DrawerNavigatorRIGHT7 = () => {
	return (
		<Drawer.Navigator initialRouteName="AllCategoryDrawer"
			screenOptions={{
				drawerPosition:"right",
				headerShown:false
			}}
		>
			<Drawer.Screen name="AllCategoryDrawer" component={DrawerNavigator7}  
				options={{ 
							title:"Drawer RIGHT 7" ,
							// drawerItemStyle: { height: 0 }
						}}
			/>
			<Drawer.Screen name="AboutDrawer" component={AboutScreen} options={{ title:"About" }}/>
		</Drawer.Navigator>
	);
};

export { DrawerNavigator2, DrawerNavigator3, DrawerNavigator6, DrawerNavigatorRIGHT7 };
