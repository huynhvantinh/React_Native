import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, Button, StyleSheet } from "react-native";

/**
 * App_20.js thử nghiệm State
 */

const DemoState = () => {
	console.log("Vao DemoState");
	const [state1, setstate1] = useState("Hello");
	const [state2, setstate2] = useState(5);
	const [state3, setstate3] = useState(99);

	// setTimeout(() => {
	// 	console.log("hihi");
	// 	setstate3(100)
	// }, 1000);

	function changeStateHandler(){
		//Nếu để ở đây thì hai lệnh setState được thực thi thành MỘT lần (đưa vào trong một BATCH) và chỉ có MỘT lần rerender lại component
		setstate1("Xin Chào");
		setstate2(state2+1);
		setTimeout(() => {
			//Nếu để ở đây thì hai lệnh setState được thực thi thành hai lần riêng và có hai lần rerender lại component
			/*setstate1("Xin Chào");
			setstate2(state2+1);*/
		}, 5000);
		console.log(`State1 = ${state1} _____ State2 = ${state2}`);
	}

	useEffect(() => {
		// console.log("Vô useEffect");
		return () => {
			
		};
	// }, [changeStateHandler]);
	// }, []);
	}, [state3, changeStateHandler]);

	return (
		<SafeAreaView styles={{ flex:1, margin:20 }}>
			<Text>Demo State</Text>
			<Text>State1 = {state1}</Text>
			<Text>State2 = {state2}</Text>
			<Button title="Change State" onPress={changeStateHandler}/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
});

export default DemoState;
