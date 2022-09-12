import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from './src/screens/1_HomeScreen';
import Tobe from './src/screens/2_Tobe';
import DangNhap from './src/screens/3_DangNhap';
import DangKy from './src/screens/4_DangKy';
import ComponentsScreen from './src/screens/5_ComponentsScreen';
import ListScreen from './src/screens/6_ListScreen';
import ColorScreen from './src/screens/7_ColorScreen';
import InputDemoScreen from './src/screens/8_InputDemoScreen';
import LayoutDemoScreen from './src/screens/9_LayoutDemoScreen_5';
import Demo1 from './src/components/Demo1';


const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        HocTiengAnh: Tobe,
        Login: DangNhap,
        Register: DangKy,
        Components: ComponentsScreen,
        List: ListScreen,
        ColorScreen: ColorScreen,
        InputDemoScreen: InputDemoScreen,
        LayoutDemoScreen: LayoutDemoScreen,
        Demo1: Demo1,
    },
    {
        initialRouteName: "Home",
        // defaultNavigationOptions: {
        //     title: "App"
        // }
    }
);

export default createAppContainer(navigator);
