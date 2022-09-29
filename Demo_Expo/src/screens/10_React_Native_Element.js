import * as React from "react";
import { Card, Button } from "react-native-elements";
import { Text, View, Image, Stack } from "react-native";

//Để dùng được thì phải cài đặt: npm install react-native-elements

export default () => {
    return (
        <View>
            <Card containerStyle={{}} wrapperStyle={{}}>
                <Card.Title>CARD WITH DIVIDER</Card.Title>
                <Card.Divider />
                <View style={{position: "relative", alignItems: "center"}}>
                    <Image
                        style={{ width: "100%", height: 100 }}
                        resizeMode="contain"
                        source={{uri: "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4"}}
                    />
                    <Text>Pranshu Chittora</Text>
                </View>
            </Card>

            <Stack row align="center" spacing={4}>
            <Button style={{ margin:10 }} title="Solid" />
            <Button title="Outline" type="outline" />
            <Button title="Clear" type="clear" />
            </Stack>
        </View>
    );
};



