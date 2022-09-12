import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const ButtonAdjustColor = ({color, setState, increase, title}) => {
    function handleAdjustColor(){
        console.log(increase);
        if(increase == true){
            if(color<255){
                setState(color+1);
            }
        }else{
            if(color>0){
                setState(color-1);
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
