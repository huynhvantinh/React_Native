import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

import BlogPostForm from '../components/BlogPostForm';
import {Context as BlogContext} from '../context/BlogContext/Blog_Context_UseReducer';

const EditScreen = ({ navigation }) => {
    console.log("Trang Edit");
    const valueBlogContext = useContext(BlogContext);
    // const edited_blog = valueBlogContext.state.find((blog) => blog.id === navigation.getParam('id') );//OK
    const edited_blog = valueBlogContext.state.find((blog) => blog.id === navigation.getParam('id') ) || {tieuDe:"Không có", noiDung:"Khong có"};//Để thử nghiệm thôi
    /*console.log(edited_blog);
    console.log(navigation.getParam('id'));*/

    /*useEffect(() => {
        //thứ tự mount và unmount của các screen trong navigation: https://stackoverflow.com/questions/61966531/what-is-a-difference-between-navigation-navigate-navigation-push-navigatio/61967910#61967910
        console.log("Trang Edit Mount");
        return () => {
            console.log("Trang Edit Un_Mount");
        };
    }, []);*/

    function goToShowScreen(){
        navigation.navigate('Show', { id: navigation.getParam('id') })//OK - Vì có Param nên có rerender lại trang Show
        // navigation.navigate('Show')//OK - nhưng không đúng bản chất vì không có rerender lại trang Show
        // navigation.pop()//OK - nhưng cũng giống cách navigate('Show') là không có truyền param nên không có bắt buộc rerender, nên cách này chỉ đúng là do ta dùng hợp lý, chứ không dùng đúng thứ tự thì sẽ sai
    }

    function editOneBlog({tieuDe, noiDung, callbackResetInput}){
        valueBlogContext.editOneBlog({edited_id: navigation.getParam('id'), newTieuDe: tieuDe, newNoiDung: noiDung, callbackGoToShowScreen: goToShowScreen, callbackResetInput});
    }

    /*useEffect(() => {
        //thứ tự mount và unmount của các screen trong navigation: https://stackoverflow.com/questions/61966531/what-is-a-difference-between-navigation-navigate-navigation-push-navigatio/61967910#61967910
        console.log("Trang Edit Mount/Rerender");
        return () => {
            console.log("Trang Edit Un_Mount/Rerender");
        };
    });*/

    return (
        <View>
            <Text>Trang EDIT</Text>
            <Button onPress={()=> navigation.navigate('Index')} title="Trang Index"/>
            <Button onPress={()=> navigation.navigate('Create')} title="Trang Create"/>
            <Button onPress={()=> navigation.navigate('Show')} title="Trang Show"/>
            <Button onPress={()=> navigation.navigate('Demo')} title="Trang Demo"/>

            {<Text>{edited_blog ? edited_blog.tieuDe +" - "+ edited_blog.noiDung : null}</Text>}
            <BlogPostForm initialValues={{ tieuDe:edited_blog.tieuDe, noiDung:edited_blog.noiDung }} onSubmit={editOneBlog} title="Edit Blog" />
        </View>
    );
};

EditScreen.navigationOptions = () => {
    return {
        title: "Trang Edit", //đây sẽ là title cho riêng screen này
    };
};

const styles = StyleSheet.create({});

export default EditScreen;
