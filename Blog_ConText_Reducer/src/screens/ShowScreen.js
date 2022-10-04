import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ShowScreen = ({ navigation }) => {

    return (
        <View>
            <Text>Trang SHOW</Text>
        </View>
    );
};

ShowScreen.navigationOptions = () => {
    return {
        title: "Trang Show", //đây sẽ là title cho riêng screen này
    }
}

const styles = StyleSheet.create({});

export default ShowScreen;
