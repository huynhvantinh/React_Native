import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';

import {Context as BlogContext} from '../context/BlogContext/Blog_Context_UseReducer';

const DemoScreen = ({navigation}) => {
    console.log("Trang Demo");
    const valueBlogContext = useContext(BlogContext)
    console.log("Demo Mot: ", valueBlogContext);
    console.log("Demo Hai: ", BlogContext._currentValue);
    console.log("Demo Ba: ", BlogContext);

    useEffect(() => {
        //thứ tự mount và unmount của các screen trong navigation: https://stackoverflow.com/questions/61966531/what-is-a-difference-between-navigation-navigate-navigation-push-navigatio/61967910#61967910
        console.log("Trang Demo Mount"); //Đúng ra là DidMount
        return () => {
            console.log("Trang Demo Un_Mount"); //Đúng ra là WillUnMount
        };
    }, []);

    return (
        <View>
            <Text>Trang Demo</Text>

            <Button onPress={()=> navigation.navigate('Index')} title="Trang Index"/>
            <Button onPress={()=> navigation.navigate('Create')} title="Trang Create"/>
            <Button onPress={()=> navigation.navigate('Show')} title="Trang Show"/>
        </View>
    );
};

DemoScreen.navigationOptions = ({ navigation }) => {
    return {
        title: "Trang Demo",
    };
};

const styles = StyleSheet.create({
    
});

export default DemoScreen;
