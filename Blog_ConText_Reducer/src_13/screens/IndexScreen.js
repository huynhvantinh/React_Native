import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';

import {Context as BlogContext} from '../context/BlogContext/Blog_Context_UseReducer';

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
                            <TouchableOpacity onPress={() => valueBlogContext.removeOneBlog({removed_id: item.id})}>
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
