import React, { Component } from "react";
import { View, Text, SafeAreaView ,StyleSheet, StatusBar } from "react-native";
import { WebView } from "react-native-webview";
import {Constants} from "expo-constants";
// import { StatusBar } from 'expo-status-bar';

const HocTiengAnh = () => {
    console.log("Chào react native nha");
    return (
        /*<WebView
            source={{
                // uri: 'https://hoctuvung2.local/'
                // uri: 'http://192.168.1.140/TruongKHTN/test_webview.php' //OK
                // uri: 'http://192.168.1.140' //Tải tới trang Laravel nên không được vì lỗi took too long to respond
                // uri: 'https://tobe.edu.vn/mobile/test_post', //Không OK - cần phải có csrf token
                uri: "https://tobe.edu.vn/api/mobile/test_post", //OK
                method: "POST"
            }}
        />*/
        <SafeAreaView style={styles.container}>
            {/* // <View style={styles.content}> */}
                {/* <StatusBar style="dark" backgroundColor="red" /> */}
                <StatusBar backgroundColor="#00BCD4" />
                <WebView
                    source={{
                        uri: 'https://tobe.edu.vn/'
                        // uri: 'https://test.tobe.edu.vn/'
                        // uri: 'https://voca.vn/'
                        // uri: 'https://hoctuvung2.local/'
                        // uri: 'http://192.168.1.140/TruongKHTN/test_webview.php' //OK
                        // uri: 'https://192.168.1.140' //Tải tới trang Laravel nên không được vì lỗi took too long to respond
                        // uri: 'https://tobe.edu.vn/mobile/test_post', //Không OK - cần phải có csrf token
                        // uri: "https://tobe.edu.vn/api/mobile/test_post", //OK
                        // // headers: {
                        //     'X-CSRF-TOKEN': "8FRG5heyg9eR8M3b6vF5qruGc6ya6VFn8BttrCIW",
                        // },
                        // body: '_token=8FRG5heyg9eR8M3b6vF5qruGc6ya6VFn8BttrCIW',
                        // method: "POST"
                    }}
                />
            {/* </View> */}
        </SafeAreaView>
        
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
    container: {
        flex:1,
    },
    content: {
        flex:1,
        paddingTop:20,
        // paddingTop: Constants.statusBarHeight, //Cho Android: https://www.youtube.com/watch?v=9YGuCgbFx3Q&list=PLlahAO-uyDzKdL-85pMk_zQGHivDBqOTl&index=6
    }
});


export default HocTiengAnh;
