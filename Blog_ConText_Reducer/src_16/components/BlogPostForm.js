import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues, title }) => {
    console.log("VAO FORM COMPONENT");
    const [tieuDe, setTieuDe] = useState(initialValues.tieuDe)
    const [noiDung, setNoiDung] = useState(initialValues.noiDung)

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
        console.log("noiDung = " + noiDung);
    }

    /*useEffect(() => {
        //thứ tự mount và unmount của các screen trong navigation: https://stackoverflow.com/questions/61966531/what-is-a-difference-between-navigation-navigate-navigation-push-navigatio/61967910#61967910
        console.log("Form Component Mount");
        return () => {
            console.log("Form Component Un_Mount");
        };
    }, []);
    useEffect(() => {
        //thứ tự mount và unmount của các screen trong navigation: https://stackoverflow.com/questions/61966531/what-is-a-difference-between-navigation-navigate-navigation-push-navigatio/61967910#61967910
        console.log("Form Component Mount/Rerender");
        return () => {
            console.log("Form Component Un_Mount/Rerender");
        };
    });*/

    return (
        <View> 
            <TextInput value={tieuDe} onChangeText={changeTieuDeHandle} autoCorrect={false} autoCapitalize="none" style={ styles.input} placeholder="Nhập tiêu đề blog"/>
            <TextInput value={noiDung} onChangeText={changeNoiDungHandle} autoCorrect={false} autoCapitalize="none" style={ [styles.input, {height:100}]} placeholder="Nhập nội dung blog"/>
            <Button 
                onPress={()=>{
                        // resetInput(); //OK
                        onSubmit({tieuDe, noiDung, callbackResetInput: resetInput})
                        }
                    } 
                title={title} 
            />
        </View>
    );
  
};

BlogPostForm.defaultProps = {
    initialValues: {
        tieuDe: 'hehe',
        noiDung: 'hahaha'
    }
};

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

export default BlogPostForm;
