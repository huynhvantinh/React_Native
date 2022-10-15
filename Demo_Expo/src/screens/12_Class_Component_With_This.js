import React from "react";
import { Text, View, Button } from "react-native";

class ClassComponentWithThis extends React.Component {
    a = 10;
    demo1(){
        console.log("Vào trong hàm demo1");
        console.log(this); //Khác bên ReactJS tí là nếu không bind(this) như ở trường hợp "Bấm ở đây 1" thì this là instance của Class DedicatedWorkerGlobalScope, còn bên ReactJS thì là undefined
        console.log(this.a);
    }

    //Liệu trong Class Component thì nên dùng arrow function để không phải dùng bind(this)?
    demo2 = () => {
        console.log('Vào trong hàm demo2 - arrow function - được xem là "auto-bound methods" nên this lúc nào cũng là instance của Class');
        console.log(this);
        console.log(this.a);
    }

    render() {
        // console.log(this.state);
        return (
            <View stytle={{ margin:100, flex:1 }}>
                <Text>Đây là Class Compoent - Có thử nghiệm dùng this và bind(this):</Text>
                <Button onPress={this.demo1} title="Bấm ở đây 1"/>
                <Button onPress={this.demo1.bind(this)} title="Bấm ở đây 2"/>
                <Button onPress={this.demo2} title="Bấm ở đây 3"/>
                <Button onPress={this.demo2.bind(this)} title="Bấm ở đây 4"/>
                
            </View>
        );
    };
};

export default ClassComponentWithThis;



