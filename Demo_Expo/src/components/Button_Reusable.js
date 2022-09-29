import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const Button_Reusable = (props) => {
    
    return (
        <>
            {/* Cách để lấy sự kiện onPress - > lấy hết các props luôn rồi dùng toán tử spread, nên sẽ có cả thuộc tính children ở trên TouchableOpacity */}
            <TouchableOpacity style={styles.buttonStyle} {...props} >
                <Text style={styles.buttonTextStyle}>{props.children + " 1"}</Text>
            </TouchableOpacity>

            {/* Cách để lấy sự kiện onPress - > không dùng toán tử spread, nên sẽ không có thuộc tính children ở trên TouchableOpacity */}
            <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress} >
                <Text style={styles.buttonTextStyle}>{props.children  + " 2"}</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    buttonTextStyle:{
        color:"#007aff"

    },
    buttonStyle:{
        borderWidth:1,
        borderColor:"#007aff",
        borderRadius:5,
        padding:10,
        width:200,
        margin:10
    }
})

export default Button_Reusable;
