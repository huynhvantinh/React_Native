import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';

import BlogContext from '../context/BlogContext/Blog_Context_UseReducer';

const IndexScreen = ({navigation}) => {
    console.log("Trang Index");
    const valueBlogContext = useContext(BlogContext)
    // console.log("Index Mot: ", valueBlogContext);
    // console.log("Index Hai: ", BlogContext);
    return (
        <View>
            <Text>Trang Index</Text>
            <Button onPress={()=> navigation.navigate('Create')} title="Trang Create"/>
            <Button onPress={()=> navigation.navigate('Show')} title="Trang Show"/>
            <Button onPress={()=> navigation.navigate('Demo')} title="Trang Demo"/>

            <FlatList
                data={valueBlogContext.blogsState}
                keyExtractor={(blogPost) => blogPost.tieuDe}
                renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })} >
                        <View style={styles.row}>
                            <Text style={styles.title}>
                                {item.tieuDe} - {item.id}
                            </Text>
                            <TouchableOpacity onPress={() => valueBlogContext.dispatchBlog({ type:"REMOVE_BLOG", payload: {removed_id:item.id} })}>
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
