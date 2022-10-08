import React, {useEffect, useContext} from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

import BlogContext from '../context/BlogContext/Blog_Context_UseReducer';

const ShowScreen = ({ navigation }) => {
    console.log("Trang Show");
    const valueBlogContext = useContext(BlogContext)
    // console.log("Show Mot: ", dataBlogs);
    // console.log("Show Hai: ", BlogContext);
    const res = valueBlogContext.state.find((blog) => blog.id == navigation.getParam('id') );
    // console.log(res);

    useEffect(() => {
        //thứ tự mount và unmount của các screen trong navigation: https://stackoverflow.com/questions/61966531/what-is-a-difference-between-navigation-navigate-navigation-push-navigatio/61967910#61967910
        console.log("Trang Show Mount");
        return () => {
            console.log("Trang Show Un_Mount");
        };
    }, []);

    return (
        <View>
            <Text>Trang SHOW</Text>
            <Button onPress={()=> navigation.navigate('Create')} title="Trang Create"/>
            <Button onPress={()=> navigation.navigate('Index')} title="Trang Index"/>
            <Button onPress={()=> navigation.navigate('Demo')} title="Trang Demo"/>

            {/* {console.log(valueBlogContext.blogsState.filter((blog) => {
               return blog.id == navigation.getParam('id')}
               ))} */}

            {/* OK {
                valueBlogContext.blogsState.filter((blog) => blog.id == navigation.getParam('id') )
                .map((blog)=> <Text>{blog.tieuDe +" - "+ blog.noiDung}</Text>)
            } */}

            {<Text>{res ? res.tieuDe +" - "+ res.noiDung : null}</Text>}
            
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
