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
import ReactNativeElement from './src/screens/10_React_Native_Element_2';
import ClassComponent from './src/screens/11_Class_Component';
import Demo1 from './src/components/Demo1';
import ComponentInComponent from './src/screens/5_2_Component_in_Component';
import ClassComponentWithThis from './src/screens/12_Class_Component_With_This';
import TobeTest from './src/screens/2_Tobe_TEST4';

/**
 * App_dung_de_thu_nghiem.js
 */

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        HocTiengAnh: Tobe,
        TobeTest,
        Login: DangNhap,
        Register: DangKy,
        Components: ComponentsScreen,
        ComponentInComponent,
        List: ListScreen,
        ColorScreen: ColorScreen,
        InputDemoScreen: InputDemoScreen,
        LayoutDemoScreen: LayoutDemoScreen,
        ReactNativeElement: ReactNativeElement,
        ClassComponent: ClassComponent,
        ClassComponentWithThis,
        Demo1: Demo1,
    },
    {
        initialRouteName: "Home",
        // initialRouteName: "HocTiengAnh",

        // defaultNavigationOptions: {
        //     title: "App"
        // }
    }
);

// export default createAppContainer(navigator);// OK - createAppContainer(navigator) trả ra một react component - Xem video 5 bài 12

//Cách viết này thì dễ thêm vào các Provider hơn
const App = createAppContainer(navigator);
export default ()=>{
    return (
        <App/>
    )
};
