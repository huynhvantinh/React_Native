import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const HocTiengAnh = () => {
    console.log("Chào react native nha");
    return (
        <View style={styles.webContent}>
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
        backgroundColor:"#FFF" //Không có cái này thì status bar có màu xám, giống như khi dùng Webview kết hợp với Navigation thì mặc định toàn bộ nền là màu xám nên làm cho phía trên statusbar có màu xám
    }
});


export default HocTiengAnh;
