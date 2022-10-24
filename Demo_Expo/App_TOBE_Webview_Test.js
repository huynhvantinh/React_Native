import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import { Camera } from "expo-camera";
import { Audio } from 'expo-av';

/**
 * App_CHON_cho_TOBE_app.js
 * Cách làm này OK cho TOBE.EDU.VN - đơn giản không cần phải cấu hình hình cho status bar
 * 
 */

const HocTiengAnh = () => {
    console.log("Chào react native nha");
    // Camera.requestCameraPermissionsAsync();
    const GetPermissions = async () => {
        try {
            console.log("Requesting permissions..");
            const CameraPerm = await Camera.requestPermissionsAsync();
            if (CameraPerm.status === "granted") {
                console.log("Camera Permission Granted");
            }

            const AudioPerm = await Audio.requestPermissionsAsync();
            if (AudioPerm.status === "granted") {
                console.log("Audio Permission Granted");
            }
        } catch (err) {
            console.error("Failed to get permissions", err);
        }
    };
    GetPermissions();
    
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
                        // uri: 'https://tobe.edu.vn/'
                        uri: 'https://2f5b-2405-4802-91b7-bc40-cac-e93-b3bc-93e5.ap.ngrok.io/'
                        // uri: 'https://webcammictest.com/'
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
