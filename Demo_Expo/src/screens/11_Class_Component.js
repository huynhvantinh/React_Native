import React from "react";
import { Card, Button } from "react-native-elements";
import { Text, View, ScrollView, Image, Stack } from "react-native";

//Để dùng được thì phải cài đặt: npm install react-native-elements

class ClassComponent extends React.Component {
    state = {albums:[]}; //có thể đưa vào trong constructor

    async componentWillMount () {
        // let response1 = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
        let response1 = await fetch('https://dummyjson.com/products');
        let response2 = await response1.json();
        this.setState({albums: response2.products})//OK
        // this.setState({albums: []})//OK - trong Class Component thì mỗi lần gọi setState đều rerender component
    }

    renderState(){
        return this.state.albums.map((item)=> <Text>{item.title}</Text>);
    }

    render() {
        // console.log(this.state);
        return (
            <View stytle={{ margin:100, flex:1 }}>
                <ScrollView stytle={{ margin:100, flex:1 }}>
                    
                    <Text>hihi</Text>
                    {this.renderState()}
                    {this.state.albums.map((item)=> {
                        // return (<>
                        //     <Text>{item.title}</Text>
                        //     <Image style={{ height:30 }} source={{ uri:item.thumbnail }}></Image>
                        // </>)
                        return ([
                            <Text>{item.title}</Text>,
                            <Image style={{ height:100, width:100, margin:10 }} source={{ uri:item.thumbnail }}></Image>
                        ])
                    })}

                    {/* OK {this.state.albums.map((item)=> {
                        console.log(item.title);
                        return <Text>{item.title}</Text>
                    })} */}

                    {/* OK {[<Text>haha</Text>, <Text>hee</Text>]} */}
                    
                </ScrollView>
            </View>
        );
    };
};

export default ClassComponent;



