import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Demo1 from "../components/Demo1";

const ComponentsScreen = (props) => {
    console.log("Vào 5.Components Screen");
    console.log(props);
    const name = "Stephen";

    return (
        <View>
            <Text style={styles.textStyle}>5. Đây là ComponentsScreen!</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>
            
            {/* OK - truyền biến navigation vào Demo_1 */}
            {/* <Demo1 navigation = {props.navigation}/> */}
            
            {/* Không truyền biến navigation vào Demo1 nhưng bên trong Demo1 vẫn thấy được biến navagion nếu như dùng withNavigation */}
            <Demo1/>
        </View>
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
