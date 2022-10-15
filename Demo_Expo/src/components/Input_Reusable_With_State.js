import React from 'react';
import {TextInput, View, ScrollView, KeyboardAvoidingView, StyleSheet} from 'react-native';

const Input_Reusable = (props) => {
    const [state, setstate] = React.useState("");
    console.log("state: " + state);
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TextInput 
                autoCorrect={false} 
                autoCapitalize="none" 
                style={ styles.InputStyle}
                //Nếu không có value={state} ở dưới thì chỉ là oneway binding
                value={state}
                //Nếu có đoạn value={state} ở trên mà không có onChangeText ở dưới thì input này sẽ không nhập chữ vào được
                onChangeText={(text)=> setstate(text)} 
                placeholder="Có State"/>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    InputStyle:{
        height:50,
        // width:100,
        borderWidth:1,
        borderColor:'#007aff',
        borderRadius:5,
        margin:20
    }
})

export default Input_Reusable;
