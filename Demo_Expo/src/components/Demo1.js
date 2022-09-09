import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const Demo1 = (props) => {
    console.log(props);
    console.log(require('../../assets/icon.png'));
    return (
        <View>
            <Text>Demo_1 - ở đây không thấy được navigation nên có thể phải dùng: useNavigation</Text>
            <Text>https://reactnavigation.org/docs/connecting-navigation-prop/</Text>
            <Button
				onPress={() => navigation.navigate("List")}
				title="6_List"
			/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Demo1;
