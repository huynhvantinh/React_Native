import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import ButtonAdjustColor from "../components/ButtonAdjustColor";

const ColorScreen = () => {
    const [red, setRed] = useState(250);
    const [green, setGreen] = useState(250);
    const [blue, setBlue] = useState(250);

    console.log(`rgb(${red},${green},${blue})`);
    return (
        <SafeAreaView style={styles.container}>
        <View style={ styles.content }>
            <ButtonAdjustColor color={red} setState={setRed} increase={false} title="Giảm Red"  />
            <ButtonAdjustColor color={red} setState={setRed} increase title="Tăng Red"  />
            <ButtonAdjustColor color={green} setState={setGreen} increase={false} title="Giảm Green"  />
            <ButtonAdjustColor color={green} setState={setGreen} increase title="Tăng Green"  />
            <ButtonAdjustColor color={blue} setState={setBlue} increase={false} title="Giảm Blue"  />
            <ButtonAdjustColor color={blue} setState={setBlue} increase title="Tăng Blue"  />

            <View style={{ height: 100, width: 100, backgroundColor:`rgb(${red},${green},${blue})` }}/>
        </View>
        </SafeAreaView>
    );
}

//Custom header xem tại Bài 12. Advanced State Management with Context, video 23 (Của Stephen Grinder)
ColorScreen.navigationOptions = () => {
    return {
        // title: "hehe", //đây sẽ là title cho riêng screen này
        headerShown: false //ẩn header của app đi
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    content: {
        backgroundColor: 'red',
    }
});

export default ColorScreen;
