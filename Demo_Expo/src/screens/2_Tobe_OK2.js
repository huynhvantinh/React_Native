import React, { Component } from "react";
import { View, Text ,StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import {Constants} from "expo-constants";

const HocTiengAnh = () => {
    console.log("Chào react native nha");
    
    //Cách thay đổi màu sắc của status bar: https://stackoverflow.com/questions/39297291/how-to-set-ios-status-bar-background-color-in-react-native
    //cách này không dùng đến SafeAreaView
    const insets = useSafeAreaInsets();
    const topbarr = Constants.statusBarHeight;
    return (
        <View style={{ flex:1 }} >
            {/* <View style={{ height:insets.top, backgroundColor: '#FFF' }}> */}
            <View style={{ height: Constants.statusBarHeight, backgroundColor: '#FFF' }}>
                {/* <StatusBar translucent barStyle="light-content" /> */}
                <StatusBar translucent />
            </View>

            <View style={styles.webContent}>
                <WebView
                    source={{
                        uri: 'https://tobe.edu.vn/'
                        // uri: 'https://test.tobe.edu.vn/'
                        // uri: 'https://voca.vn/'
                    }}
                />
            </View>
        </View>
        
    );
};

//Custom header xem tại Bài 12. Advanced State Management with Context, video 23 (Của Stephen Grinder)
HocTiengAnh.navigationOptions = () => {
    return {
        // title: "hehe", //đây sẽ là title cho riêng screen này
        headerShown: false //ẩn header của app đi
    }
}

const styles = StyleSheet.create({
    webContent: {
        flex:1,
    },
    statusBarStyle: {
        // height: Constants.statusBarHeight, //CHƯA ĐƯỢC NÊN DÙNG insets.top
        
    }
});


export default HocTiengAnh;
