import React, { Component } from "react";
import { WebView } from "react-native-webview";

const HocTiengAnh = () => {
    console.log("Chào react native nha");
    return (
        // <WebView
        //     source={{
        //         // uri: 'https://hoctuvung2.local/'
        //         // uri: 'http://192.168.1.140/TruongKHTN/test_webview.php' //OK
        //         // uri: 'http://192.168.1.140' //Tải tới trang Laravel nên không được vì lỗi took too long to respond
        //         // uri: 'https://tobe.edu.vn/mobile/test_post', //Không OK - cần phải có csrf token
        //         uri: "https://tobe.edu.vn/api/mobile/test_post", //OK
        //         method: "POST"
        //     }}
        // />
        <WebView
            source={{
                // uri: 'https://tobe.edu.vn/'
                uri: 'https://test.tobe.edu.vn/'
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
    );
};

export default HocTiengAnh;
