import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import global_data from '../global_data';



const Screen2 = ({navigation}) => {
    console.log("Trang Screen2");
    console.log("global_data trong Trang Screen2: ", global_data);


    return (
        <View>
            <Text>Trang Screen2</Text>
            <Text>global_data trong Trang Screen2:</Text>
            <Text>{"global_data.data1 = " + global_data.data1}</Text>
            <Text>{"global_data.data2 = " + global_data.data2}</Text>

            <Button onPress={()=> navigation.navigate('Screen1')} title="Trang Screen1"/>
        </View>
    );
};


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray',
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24,
    },
});

export default Screen2;

Screen2.navigationOptions = ({ navigation }) => {
    return {
        title: "Trang Screen2", //đây sẽ là title cho riêng screen này
    };
};
