import React, { Component } from "react";
import { View, Text, SafeAreaView } from "react-native";
import GestureRecognizer, { swipeDirections } from "react-native-swipe-gestures";
import { useNavigation } from '@react-navigation/native';

/**
 * https://dev-yakuza.posstree.com/en/react-native/react-native-swipe-gestures/
 * https://github.com/glepur/react-native-swipe-gestures
 */

function Swipe_Wraper ({children, screen_left, screen_right}) {
    const navigation = useNavigation();

    function onSwipeLeft(gestureState) {
        console.log("onSwipeLeft");
        // navigation.navigate(`OneBlogTab${screen_left}`)
        navigation.navigate(`OneBlogTab${screen_right}`)
    }
    
    function onSwipeRight(gestureState) {
        console.log("onSwipeRight")
        // navigation.navigate(`OneBlogTab${screen_right}`)
        navigation.navigate(`OneBlogTab${screen_left}`)
    }

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };
	return (
        <GestureRecognizer
            config={config}
            style={{ flex: 1 }}

            // onSwipe={(direction, state) => this.onSwipe(direction, state)}
            // onSwipeUp={(state) => this.onSwipeUp(state)}
            // onSwipeDown={(state) => this.onSwipeDown(state)}
            // onSwipeLeft={(state) => this.onSwipeLeft(state)}
            // onSwipeRight={(state) => this.onSwipeRight(state)}
            
            // OK onSwipe={() => console.log("onSwipe")}
            // OK onSwipe={(direction, gestureState) => {console.log("onSwipe: ", direction), console.log("gestureState: ",gestureState);}}
            onSwipeUp={(gestureState) => console.log("onSwipeUp:", gestureState)}
            onSwipeDown={() => console.log("onSwipeDown")}
            onSwipeLeft={(gestureState) => onSwipeLeft(gestureState)}
            onSwipeRight={(gestureState) => onSwipeRight(gestureState)}
        >
            {children}
        </GestureRecognizer>
	);
    
}

export default Swipe_Wraper;
