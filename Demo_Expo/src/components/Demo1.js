import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

//Thử nghiệm withNavigation - OK - Bên Conponent Cha không cần truyền biến navigation thông qua props:
import { withNavigation } from 'react-navigation';

const Demo1 = (props) => {
    console.log("Vào Demo1");
    console.log(props);
    console.log(props.navigation);
    console.log(require('../../assets/icon.png'));

    return (
        <View>
            <Text>Demo_1 - ở đây không thấy được navigation</Text>
            <Text>Cách 1 - truyền biến navigation từ Component Cha vào</Text>
            <Text>Cách 2 - có thể phải dùng: useNavigation (phiên bản 5,6), có thể là dùng context để biến navigation thành biến global:</Text>
            <Text>https://reactnavigation.org/docs/connecting-navigation-prop/</Text>
            <Text>Cách 3 - Với phiên bản 4 thì dùng withNavigation :</Text>
            <Text>https://reactnavigation.org/docs/4.x/connecting-navigation-prop</Text>
            <Button
				onPress={() => props.navigation.navigate("List")}
				title="6_List"
			/>
            <Button
				onPress={() => props.navigation.goBack()}
				title="Trở về với goBack()"
			/>
        </View>
    );
}

const styles = StyleSheet.create({})

// export default Demo1; //OK - Với cái này thì bên Conponent Cha phải truyền bên navigation thì bên Demo1 là bên con mới dùng Navigation được

//Thử nghiệm withNavigation - OK - Bên Conponent Cha không cần truyền biến navigation thông qua props:
export default withNavigation(Demo1);
