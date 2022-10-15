import React, { Component } from "react";
import { View, Text ,StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const TobeTest = () => {
    console.log("Chào react native nha");
    
    //Cách thay đổi màu sắc của status bar: https://stackoverflow.com/questions/39297291/how-to-set-ios-status-bar-background-color-in-react-native
    const insets = useSafeAreaInsets();
    return (

        //OK
        // <SafeAreaProvider >
        //     <View style={{ height:insets.top, backgroundColor:"#FFF" }}>
        //         <StatusBar animated={true} backgroundColor="#FFF" barStyle="dark-content" />
        //     </View>

        //     <View style={styles.webContent}>
        //         <WebView
        //             source={{
        //                 uri: 'https://tobe.edu.vn/'
        //                 // uri: 'https://maintain.tobe.edu.vn/'
        //                 //Mỗi lần dùng ngrok thì mở file ngrok.exe lên rồi chạy lệnh: ngrok http https://localhost hoặc  ngrok http https://hoctuvung2.local (Dù chạy lệnh nào thì bên Apache đều phải cấu hình lại vhost sao cho localhost trỏ về thư mục dự án Laravel)
        //                 // uri: 'https://d86d-2405-4802-90f1-9e70-d017-cb7e-a58a-bdfc.ap.ngrok.io'                 
        //                 // uri: 'https://voca.vn/'
        //             }}
        //         />
        //     </View>
        // </SafeAreaProvider>

        //OK
        // <>
        //     <View style={{ height:insets.top, backgroundColor:"#FFF" }}>
        //         <StatusBar animated={true} backgroundColor="#FFF" barStyle="dark-content" />
        //     </View>

        //     <SafeAreaView style={{ flex:1 }}>
        //         {/* <View style={{ height:insets.top, backgroundColor:"#FFF" }}>
        //             <StatusBar animated={true} backgroundColor="#FFF" barStyle="dark-content" />
        //         </View> */}

        //         <View style={styles.webContent}>
        //             <WebView
        //                 source={{
        //                     uri: 'https://tobe.edu.vn/'
        //                     // uri: 'https://maintain.tobe.edu.vn/'
        //                     //Mỗi lần dùng ngrok thì mở file ngrok.exe lên rồi chạy lệnh: ngrok http https://localhost hoặc  ngrok http https://hoctuvung2.local (Dù chạy lệnh nào thì bên Apache đều phải cấu hình lại vhost sao cho localhost trỏ về thư mục dự án Laravel)
        //                     // uri: 'https://d86d-2405-4802-90f1-9e70-d017-cb7e-a58a-bdfc.ap.ngrok.io'                 
        //                     // uri: 'https://voca.vn/'
        //                 }}
        //             />
        //         </View>
        //     </SafeAreaView>
        // </>

        // // <SafeAreaView style={{ flex:1 }}>
        //     <View style={{ flex:1}}>
        //         <WebView
        //             source={{
        //                     uri: 'https://tobe.edu.vn/'
        //                 }}
        //         />
        //     </View>
        // // </SafeAreaView>

        // <View style={{ backgroundColor:"blue", flex:1 }}>
        //     <SafeAreaView style={{ flex:1 }}>
        //         <View style={{ backgroundColor:"#FFF566", flex:1, justifyContent:'center', alignItems:'center' }}>
        //         <Text>hihi</Text>
        //         </View>
        //     </SafeAreaView>
        // </View>
        <View style={{ flex:1, backgroundColor:"blue" }}>
            <SafeAreaView style={{ flex:1 }}>
                <WebView
                    source={{
                        uri: 'https://tobe.edu.vn/'
                    }}
                />
            </SafeAreaView>
        </View>
    );
};

//Custom header xem tại Bài 12. Advanced State Management with Context, video 23 (Của Stephen Grinder)
//Hoặc xem Bài 15. In-App Authentication - Video 10 ->gán cho navigationOptions bằng function là do ta muốn dùng prop navigation, nếu không thì gán cho nó đối tượng cũng được
TobeTest.navigationOptions = () => {
    return {
        // title: "hehe", //đây sẽ là title cho riêng screen này
        headerShown: false //OK - ẩn header của app đi
        // header: null //OK - ẩn header của app đi
    }
}

const styles = StyleSheet.create({
    webContent: {
        flex:1,
    }
});


export default TobeTest;
