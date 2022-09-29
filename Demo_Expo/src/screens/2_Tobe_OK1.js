import React from "react";
import { View, Text ,StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";
import { WebView } from "react-native-webview";

const HocTiengAnh = () => {
    console.log("Chào react native nha");
    
    //Xem video 32.Safe Area Views.p4 trong bài 16.In-app Authentication
    
    return (
        <SafeAreaView forceInset={{ top:"always" }} style={{ flex:1, color:"#FFF" }}>
            <View style={styles.webContent}>
                <WebView
                    source={{
                        uri: 'https://tobe.edu.vn/'
                        // uri: 'https://maintain.tobe.edu.vn/'
                        //Mỗi lần dùng ngrok thì mở file ngrok.exe lên rồi chạy lệnh: ngrok http https://localhost hoặc  ngrok http https://hoctuvung2.local (Dù chạy lệnh nào thì bên Apache đều phải cấu hình lại vhost sao cho localhost trỏ về thư mục dự án Laravel)
                        // uri: 'https://d86d-2405-4802-90f1-9e70-d017-cb7e-a58a-bdfc.ap.ngrok.io'                 
                        // uri: 'https://voca.vn/'
                    }}
                />
            </View>
        </SafeAreaView>
        
    );
};

//Custom header xem tại Bài 12. Advanced State Management with Context, video 23 (Của Stephen Grinder)
//Hoặc xem Bài 15. In-App Authentication - Video 10 ->gán cho navigationOptions bằng function là do ta muốn dùng prop navigation, nếu không thì gán cho nó đối tượng cũng được
HocTiengAnh.navigationOptions = () => {
    return {
        // title: "hehe", //đây sẽ là title cho riêng screen này
        // headerShown: false //OK - ẩn header của app đi
        header: null //OK - ẩn header của app đi
    }
}

const styles = StyleSheet.create({
    webContent: {
        flex:1,
    }
});


export default HocTiengAnh;
