import React, { Component } from "react";
import { WebView } from "react-native-webview";

const DangKy = () => {
    console.log("Chào react native nha");
    return (
        <WebView
            source={{
                uri: 'https://test.tobe.edu.vn/register'
            }}
        />
    );
};

export default DangKy;
