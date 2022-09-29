import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// const HomeScreen = ({ navigation }) => { //OK
const HomeScreen = (props) => { //OK
    console.log(props);
    const { navigation } = props;
    console.log("React Native nha")
    return (
        <View style={styles.allPage}>
            <Text style={styles.text}>HomeScreen. Chào Bạn đến với ứng dụng học tiếng Anh TOBE!</Text>
            
            <Button
				onPress={() => navigation.navigate("HocTiengAnh")}
				title="2. Học Tiếng Anh"
			/>

            <Button
				onPress={() => navigation.navigate("Login")}
				title="3. Đăng Nhập"
			/>

            <Button
				onPress={() => navigation.navigate("Register")}
				title="4. Đăng Ký"
			/>

            <Button
				onPress={() => navigation.navigate("Components")}
				title="5. Go to Components Demo"
			/>

			<Button
				onPress={() => navigation.navigate("List")}
                title="6. Go to List Demo"
			/>

            <Button
				onPress={() => navigation.navigate("ColorScreen")}
                title="7. Go to Color Adjusment"
			/>

            <Button
				onPress={() => navigation.navigate("InputDemoScreen")}
                title="8. Go to Input Demo Screen"
			/>

            <Button
				onPress={() => navigation.navigate("LayoutDemoScreen")}
                title="9. Go to Layout Demo Screen"
			/>

            <Button
				onPress={() => navigation.navigate("ReactNativeElement")}
                title="10. Go to ReactNativeElement"
			/>

            <Button
				onPress={() => navigation.navigate("ClassComponent")}
                title="11. Class Component"
			/>


        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: "justify"
    },
    allPage:{
        padding: 20,
    }
});

export default HomeScreen;
