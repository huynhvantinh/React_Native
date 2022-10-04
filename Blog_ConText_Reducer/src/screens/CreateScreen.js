import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const CreateScreen = () => {
    const [tieuDe, setTieuDe] = useState("")
    const [noiDung, setNoiDung] = useState("")

    function changeTieuDeHandle(text){
        // console.log(text);
        setTieuDe(text);
    }

    function changeNoiDungHandle(text){
        setNoiDung(text);
    }

    return (
        <View>
            <Text>Trang CREATE</Text>
            <TextInput value={tieuDe} onChangeText={changeTieuDeHandle} autoCorrect={false} autoCapitalize="none" style={ styles.input} placeholder="Nhập tiêu đề blog"/>
            <TextInput value={noiDung} onChangeText={changeNoiDungHandle} autoCorrect={false} autoCapitalize="none" style={ [styles.input, {height:100}]} placeholder="Nhập nội dung blog"/>
            <Button title='Create Blog' />
        </View>
    );
};

CreateScreen.navigationOptions = () => {
    return {
        title: "Trang Create", //đây sẽ là title cho riêng screen này
    }
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default CreateScreen;
