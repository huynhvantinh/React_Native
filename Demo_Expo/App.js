import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

/**
 * App_CHON_cho_TOBE_app.js
 * Cách làm này OK cho TOBE.EDU.VN - đơn giản không cần phải cấu hình hình cho status bar
 * 
 */

const HocTiengAnh = () => {
    console.log("Chào react native nha");
    return (
        /*OK <SafeAreaView style={styles.webContent}>            
            <WebView
                source={{
                    uri: 'https://tobe.edu.vn/'
                }}
            />            
        </SafeAreaView>*/

        //Cái này thì đảm bảo chắc chắn rằng phần ngoài SafeAreaView cũng chính là status bar có nền màu trắng
        <View style={[styles.webContent, {backgroundColor:"#FFF"}]}>
            <SafeAreaView style={styles.webContent}>
                <WebView
                    source={{
                        uri: 'https://tobe.edu.vn/'
                    }}
                />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    webContent: {
        flex:1,
    }
});

export default HocTiengAnh;
