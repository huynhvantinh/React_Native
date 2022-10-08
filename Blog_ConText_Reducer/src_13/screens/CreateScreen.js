import React, {useEffect , useContext} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import BlogPostForm from '../components/BlogPostForm';
import {Context as BlogContext} from '../context/BlogContext/Blog_Context_UseReducer';

const CreateScreen = ({navigation}) => {
    console.log("Trang Create");
    const valueBlogContext = useContext(BlogContext)

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
        console.log("Vao function goToIndexScreen");
        navigation.navigate("Index");
    }

    function addOneBlog({tieuDe, noiDung, callbackResetInput}){
        valueBlogContext.addOneBlog({tieuDe, noiDung, callbackResetInput, callbackGoToIndexScreen: goToIndexScreen});

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
            <Button onPress={()=> navigation.navigate('Edit')} title="Trang Edit"/>
            <Button onPress={()=> navigation.navigate('Demo')} title="Trang Demo"/>

            {/* RẤT OK <BlogPostForm initialValues={{ tieuDe:"", noiDung:""}} onSubmit={addOneBlog} title="Create Blog" /> */}
            <BlogPostForm 
                initialValues={{ tieuDe:"", noiDung:""}} 
                title="Add new Blog" 
                onSubmit={({tieuDe, noiDung, callbackResetInput})=>{
                    valueBlogContext.addOneBlog({tieuDe, noiDung, callbackResetInput, callbackGoToIndexScreen: goToIndexScreen})
                }} 
            />
            {/*  Nếu ở đây không truyền initialValues thì bên BlogPostForm sẽ lấy giá trị mặc định được thiết lập tại BlogPostForm.defaultProps */}
            {/* <BlogPostForm onSubmit={addOneBlog} title="Create Blog" /> */}
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
