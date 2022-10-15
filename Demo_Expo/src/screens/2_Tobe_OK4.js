import React from "react";
import { View, SafeAreaView ,StyleSheet, StatusBar } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const HocTiengAnh = () => {
    console.log("Chào react native nha");
    
    //Cách thay đổi màu sắc của status bar: https://stackoverflow.com/questions/39297291/how-to-set-ios-status-bar-background-color-in-react-native
    const insets = useSafeAreaInsets();
    return (
        <>
            <View style={{ height:insets.top, backgroundColor:"#FFF" }}>
                <StatusBar animated={true} backgroundColor="#FFF" barStyle="dark-content" />
            </View>

            <SafeAreaView style={{ flex:1 }}>
                <WebView
                    source={{
                        uri: 'https://tobe.edu.vn/'
                    }}
                />
            </SafeAreaView>
        </>
        
    );
};

//Custom header xem tại Bài 12. Advanced State Management with Context, video 23 (Của Stephen Grinder)
//Hoặc xem Bài 15. In-App Authentication - Video 10 ->gán cho navigationOptions bằng function là do ta muốn dùng prop navigation, nếu không thì gán cho nó đối tượng cũng được
HocTiengAnh.navigationOptions = () => {
    return {
        // title: "hehe", //đây sẽ là title cho riêng screen này
        // header: null //OK - ẩn header của app đi - Đã Depricated
        headerShown: false //OK - ẩn header của app đi
    }
}

const styles = StyleSheet.create({
    webContent: {
        flex:1,
    }
});


export default HocTiengAnh;
