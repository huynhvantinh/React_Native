import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';
import axios from "axios";

import {Context as BlogContext} from '../context/BlogContext/Blog_Context_UseReducer';

// const baseURL = "https://a0c1-2405-4802-9114-83c0-dc02-d86a-cc02-2014.ap.ngrok.io/blogposts"; //Nên cấu hình mặc định baseURL cho axios

const IndexScreen = ({navigation}) => {
    console.log("Trang Index");
    const valueBlogContext = useContext(BlogContext);


    //CÁCH 0 - OK - CHỌN CÁCH NÀY
    useEffect(() => {
        console.log("Trang Index Mount- Load API");   
        valueBlogContext.loadBlogsAPI();

        //Nếu dùng addOneBlogAPI_2 khi thêm Blog thì phải bổ sung đoạn này, còn nếu dùng addOneBlogAPI thì khóa lại
        //Phương pháp này thì bất lợi là lúc đầu sẽ rerender trang index tới 2 lần 
        /*const listenerDidFocus = navigation.addListener("didFocus", ()=>{
            console.log("didFocus - mỗi khi navigate vào trang Index");
            valueBlogContext.loadBlogsAPI();
        });

        return ()=>{
            console.log("DỌN DẸP listenerDidFocus");
            listenerDidFocus.remove();
        }*/

    }, []);

    //CÁCH 1 - OK:
    /*async function loadApi(){
        const response = await axios.get("https://6de3-2405-4802-9114-83c0-fc24-9090-52e0-c857.ap.ngrok.io/blogposts");
        console.log(response.data);
        console.log(typeof response.data);
        valueBlogContext.loadBlogs(response.data);
    }
    useEffect(() => {
        console.log("Trang Index Mount- Load API");   
        loadApi();
    }, []);*/

    /* CÁCH 2 - OK:
    useEffect(() => {
        console.log("Trang Index Mount");   
        axios.get("https://6de3-2405-4802-9114-83c0-fc24-9090-52e0-c857.ap.ngrok.io/blogposts").then((response) => {
            console.log("BÊN TRONG useEFECT - response.data:");
            console.log(response.data);
            console.log(typeof response.data);
            valueBlogContext.loadBlogs(response.data);
        })
        .catch(error => console.log(error));
    }, []);*/

    //CÁCH 3 - OK:
    /*useEffect(() => {
        console.log("Trang Index Mount - Load APi CÁCH 3");   
        async function loadApiInUseEffect(){
            const response = await axios.get("https://6de3-2405-4802-9114-83c0-fc24-9090-52e0-c857.ap.ngrok.io/blogposts");
            console.log(response.data);
            console.log(typeof response.data);
            valueBlogContext.loadBlogs(response.data);
        }
        loadApiInUseEffect();
    }, []);*/

    //CÁCH 3 - OK:
    /*useEffect(() => {
        console.log("Trang Index Mount - Load APi CÁCH 3");   
        
        const loadApiInUseEffect = async () => {
            const response = await axios.get("https://6de3-2405-4802-9114-83c0-fc24-9090-52e0-c857.ap.ngrok.io/blogposts");
            console.log(response.data);
            console.log(typeof response.data);
            valueBlogContext.loadBlogs(response.data);
        }
        loadApiInUseEffect()
        .catch(console.error);
    }, []);*/

    //CÁCH 4 - Cách này khuyến cáo là sai, vì bản chất hàm async mặc định có return Promise, trong khi đó hàm trong useEffect phải return undefine hoặc một hàm bt(hàm clean up):
    //https://devtrium.com/posts/async-functions-useeffect
    /*useEffect(async () => {
        console.log("Trang Index Mount - Load APi CÁCH 3");   
        const response = await axios.get("https://6de3-2405-4802-9114-83c0-fc24-9090-52e0-c857.ap.ngrok.io/blogposts");
        console.log(response.data);
        console.log(typeof response.data);
        valueBlogContext.loadBlogs(response.data);
    }, []);*/

    //TEST - Thú vị
    /*useEffect(() => {
        console.log("Trang Index Mount - Them Blog");   
        //valueBlogContext.addOneBlog({tieuDe:"hihi", noiDung:"haha", callbackResetInput: ()=>{console.log("Do NOTHING");}})
        const loadApiInUseEffect = async () => {
            //THÚ VỊ - Chỉ cần thay đổi có dùng await là thứ tự chạy các console.log ở bên logics function và reducer lại theo trình tự
            const response = await axios.get("https://6de3-2405-4802-9114-83c0-fc24-9090-52e0-c857.ap.ngrok.io/blogposts");
            // const response = axios.get("https://6de3-2405-4802-9114-83c0-fc24-9090-52e0-c857.ap.ngrok.io/blogposts");
            const res = response.data;
            console.log(res);
            console.log(typeof res);
            //valueBlogContext.addOneBlog({tieuDe:"hihi", noiDung:"haha", callbackResetInput: ()=>{console.log("Do NOTHING");}})
            valueBlogContext.loadBlogs(res);
        }
        loadApiInUseEffect().catch(console.error);

        // console.log("Trang Index Mount - Load API TEST");
        // const loadApiInUseEffect = async () => {
        //     const response = await axios.get("https://6de3-2405-4802-9114-83c0-fc24-9090-52e0-c857.ap.ngrok.io/blogposts");
        //     const res = response.data;
        //     console.log(res);
        //     console.log(typeof res);
            
        //     valueBlogContext.addOneBlog({tieuDe:res[0].tieuDe, noiDung:res[0].noiDung, callbackResetInput: ()=>{console.log("Do NOTHING");}})
        // }
        // loadApiInUseEffect().catch(console.error);
    }, []);*/

    return (
        <View>
            <Text>Trang Index</Text>
            <Button onPress={()=> navigation.navigate('Create')} title="Trang Create"/>
            <Button onPress={()=> navigation.navigate('Show')} title="Trang Show"/>
            <Button onPress={()=> navigation.navigate('Edit')} title="Trang Edit"/>
            <Button onPress={()=> navigation.navigate('Demo')} title="Trang Demo"/>
            <Button onPress={()=> navigation.navigate('Edit', { id: 111 })} title="Trang Edit Blog có ID:111"/>
            <Button onPress={()=> navigation.navigate('Edit', { id: navigation.getParam('id') })} title="Trang Edit Blog có ID đang lưu trong param"/>
            {/* HAY HAY HAY - khi ta navigate tới một Screen mà có kèm theo Param thì cũng làm cho Screen đó rerender */}

            <FlatList
                data={valueBlogContext.state}
                keyExtractor={(blogPost) => blogPost.tieuDe}
                renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })} >
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.tieuDe} - {item.id}</Text>
                            <TouchableOpacity onPress={() => valueBlogContext.removeOneBlogAPI_2({removed_id: item.id})}>
                                <Feather style={styles.icon} name="trash" />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        title: "Trang Index",
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')} style={{ marginRight:20 }}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        )
    };
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

export default IndexScreen;
