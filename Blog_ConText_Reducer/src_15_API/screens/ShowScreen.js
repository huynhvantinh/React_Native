import React, {useEffect, useContext} from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import {Context as BlogContext} from '../context/BlogContext/Blog_Context_UseReducer';

const ShowScreen = ({ navigation }) => {
    console.log("Trang Show");
    const valueBlogContext = useContext(BlogContext)
    // console.log("Show Mot: ", dataBlogs);
    // console.log("Show Hai: ", BlogContext);
    const res = valueBlogContext.state.find((blog) => blog.id === navigation.getParam('id') );
    // console.log(res);

    useEffect(() => {
        //thứ tự mount và unmount của các screen trong navigation: https://stackoverflow.com/questions/61966531/what-is-a-difference-between-navigation-navigate-navigation-push-navigatio/61967910#61967910
        console.log("Trang Show Mount");
        return () => {
            console.log("Trang Show Un_Mount");
        };
    }, []);
    useEffect(() => {
        //thứ tự mount và unmount của các screen trong navigation: https://stackoverflow.com/questions/61966531/what-is-a-difference-between-navigation-navigate-navigation-push-navigatio/61967910#61967910
        console.log("Trang Show Mount/Rerender");
        return () => {
            console.log("Trang Show Un_Mount/Rerender");
        };
    });

    return (
        <View>
            <Text>Trang SHOW</Text>
            <Button onPress={()=> navigation.navigate('Index')} title="Trang Index"/>
            <Button onPress={()=> navigation.navigate('Create')} title="Trang Create"/>
            <Button onPress={()=> navigation.navigate('Edit')} title="Trang Edit"/>
            <Button onPress={()=> navigation.navigate('Demo')} title="Trang Demo"/>

            <Button onPress={()=> navigation.navigate('Edit', { id: navigation.getParam('id') })} title="Trang Edit Blog có ID nam trong Param"/>
            <Button onPress={()=> navigation.navigate('Edit', { id: 111 })} title="Trang Edit Blog có ID:111"/>

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


ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        title: "Trang Show", //đây sẽ là title cho riêng screen này
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') }) } >
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({});

export default ShowScreen;
