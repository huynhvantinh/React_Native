import React from 'react';
import {TextInput, View, ScrollView, KeyboardAvoidingView, StyleSheet} from 'react-native';

const Input_Reusable = (props) => {
    
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TextInput autoCorrect={false} autoCapitalize="none" style={ styles.InputStyle} />
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
