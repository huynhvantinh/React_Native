import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const ButtonAdjustColor = ({color, setState, increase, title}) => {
    console.log("Tăng giam color");
    function handleAdjustColor(){
        console.log(increase);
        if(increase == true){
            if(color + 15 <= 255){
                setState(color+15);
            }
        }else{
            if(color - 15 >=0){
                setState(color-15);
            }
        }
    }
    return (
        <View>
            <Button title={title} onPress={handleAdjustColor}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ButtonAdjustColor;
