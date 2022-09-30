import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import Demo1 from "../components/Demo1";
import Button_Reusable from "../components/Button_Reusable";
import Input_Reusable from "../components/Input_Reusable";

const ComponentsScreen = (props) => {
    console.log("Vào 5.Components Screen");
    console.log(props);
    const name = "Stephen";

    return (
        <View style={{ flex:1 }}>
        <ScrollView>
            <Text style={styles.textStyle}>5. Đây là ComponentsScreen!</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>
            
            {/* OK - truyền biến navigation vào Demo_1 */}
            {/* <Demo1 navigation = {props.navigation}/> */}
            
            {/* Không truyền biến navigation vào Demo1 nhưng bên trong Demo1 vẫn thấy được biến navagion nếu như dùng withNavigation */}
            <Demo1/>
            <Button_Reusable onPress={ ()=>{console.log("Đây là onclick của Button_Reusable")} }>Click Me</Button_Reusable>
            <Input_Reusable />
        </ScrollView>
        </View>
        
        //Vẫn được -> đây là mảng các JSX giống như khi ta dùng lệnh map sẽ trả về
        // [
        //     <Text style={styles.textStyle}>5. Đây là ComponentsScreen!</Text>,
        //     <Text style={styles.subHeaderStyle}>My name is {name}</Text>,
        //     <Demo1/>,
        //     <Button_Reusable onPress={ ()=>{console.log("Đây là onclick của Button_Reusable")} } >Click Me</Button_Reusable>
        // ]
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;
