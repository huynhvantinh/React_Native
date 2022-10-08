import React, {useState, useEffect , useContext} from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

import BlogContext from '../context/BlogContext/Blog_Context_UseReducer';

const CreateScreen = ({navigation}) => {
    console.log("Trang Create");
    const valueBlogContext = useContext(BlogContext)
    // console.log("BlogContext Trong: ", BlogContext);
    const [tieuDe, setTieuDe] = useState("")
    const [noiDung, setNoiDung] = useState("")

    function changeTieuDeHandle(text){
        // console.log(text);
        setTieuDe(text);
    }

    function changeNoiDungHandle(text){
        setNoiDung(text);
    }

    function resetInput(){
        console.log("Vao function resetInput");
        setNoiDung(""); 
        setTieuDe("");
    }

    function goToIndexScreen(){
        console.log("Ve trang Index");
        navigation.navigate("Index");
    }

    useEffect(() => {
        //thứ tự mount và unmount của các screen trong navigation: https://stackoverflow.com/questions/61966531/what-is-a-difference-between-navigation-navigate-navigation-push-navigatio/61967910#61967910
        console.log("Trang Create Mount");
        return () => {
            console.log("Trang Create Un_Mount");
        };
    }, []);

    return (
        <View>
            <Text>Trang CREATE</Text>

            <Button onPress={()=> navigation.navigate('Index')} title="Trang Index"/>
            <Button onPress={()=> navigation.navigate('Show')} title="Trang Show"/>
            <Button onPress={()=> navigation.navigate('Demo')} title="Trang Demo"/>
            
            <TextInput value={tieuDe} onChangeText={changeTieuDeHandle} autoCorrect={false} autoCapitalize="none" style={ styles.input} placeholder="Nhập tiêu đề blog"/>
            <TextInput value={noiDung} onChangeText={changeNoiDungHandle} autoCorrect={false} autoCapitalize="none" style={ [styles.input, {height:100}]} placeholder="Nhập nội dung blog"/>
            {/* OK - Nhưng các dưới nhanh hơn vì cách này mỗi lần click là tạo ra một hàm resetInput mới - nhưng may thay là như nhau vì dù sao thì mỗi lần click đểu rerender cả chương trình nên cách dưới cũng phải tạo ra callBackResetInputmới
            <Button onPress={()=> {valueBlogContext.addOneBlog({tieuDe,noiDung, callBackResetInput: () => {setNoiDung(""); setTieuDe("")} })}} title='Create Blog' /> */}
            {/* OK <Button onPress={()=> {valueBlogContext.addOneBlog({tieuDe,noiDung, callBackResetInput: resetInput })}} title='Create Blog' /> */}
            {/* OK<Button onPress={()=> {valueBlogContext.addOneBlog({tieuDe,noiDung, callBackResetInput: resetInput }); goToIndexScreen()}} title='Create Blog' /> */}
            <Button onPress={()=> {valueBlogContext.addOneBlog({tieuDe,noiDung, callBackResetInput: resetInput, callbackGoToIndexScreen: goToIndexScreen })}} title='Create Blog' />
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
