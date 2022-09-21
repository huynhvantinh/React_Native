import React, { Component } from "react";
import { WebView } from "react-native-webview";

const DangNhap = () => {
    console.log("Chào react native nha");
    return (
        <WebView
            source={{
                uri: 'https://test.tobe.edu.vn/login'
            }}
        />
    );
};

export default DangNhap;
