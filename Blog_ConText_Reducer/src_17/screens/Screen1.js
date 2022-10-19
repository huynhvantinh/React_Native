import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import global_data from '../global_data';



const IndexScreen = ({navigation}) => {
    console.log("Trang Screen1");
    console.log("global_data trong Trang Screen1: ", global_data);

    const [state, setstate] = React.useState(global_data.data2);

    function changeTextHandler(text){
        setstate(text);
        // global_data.data2 = state; //Sẽ bị chậm một nhịp trong việc cập nhật lại global_data.data2
    }

    //Để trong useEffect thì dữ liệu được cập nhập không bị chậm một nhịp, nhưng phần in hiển thị trong JSX bên dưới bị chậm do các lệnh trong useEffect được thực hiện sau
    // React.useEffect(() => {
    //     console.log("Vào useEffect bên Screen1");
    //     global_data.data2 = state;
    // });

    //Để bên ngoài là OK nhất
    global_data.data2 = state;

    return (
        <View>
            <Text>Trang Screen1</Text>
            <Text>global_data trong Trang Screen1:</Text>
            <Text>{"global_data.data1 = " + global_data.data1}</Text>
            <Text>{"global_data.data2 = " + global_data.data2}</Text>
            {console.log("Vào Screen1")}

            <TextInput value={state} onChangeText={changeTextHandler} style={styles.textInput}/>

            <Button onPress={()=> navigation.navigate('Screen2')} title="Trang Screen2"/>
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
    textInput: {
        borderWidth:1,
        borderColor: 'black',
        height: 50,
        margin: 20,
        padding: 10
    }
});

export default IndexScreen;
