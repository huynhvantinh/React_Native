import React, {useState} from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard  } from 'react-native';

const ComponentWrapComponent = (props) => {
    const [state, setState] = useState("");
    return (
        <View>
            <Text>Đây là text Input, value = {state}</Text>
            <TextInput value={state} onChangeText={(text)=> setState(text)}  autoCorrect={false} autoCapitalize="none" style={ styles.InputStyle} />
            {props.children}
        </View>
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
});

export default ComponentWrapComponent;