import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

class Tobe extends Component {

    //Custom header xem tại Bài 12. Advanced State Management with Context, video 23 (Của Stephen Grinder)
    static navigationOptions = {
        title: 'Hello', //Đây sẽ là title cho header của trang này
    };

    render() {
        return (
            <WebView
                source={{
                    // uri: 'https://reactnative.dev/',
                    uri: "https://tobe.edu.vn/"
                }}
            />
        );
    }
}

export default Tobe;



