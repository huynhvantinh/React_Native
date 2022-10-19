import React, { useState, useLayoutEffect, useEffect } from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

/**
 * 
 * App_18.js - Phân biệt useLayoutEffect và useEffect
 * https://viblo.asia/p/useeffect-vs-uselayouteffect-maGK7OBeKj2
 */

const NumberValue = () => {
	console.log("Vào Component");
	const [value, setValue] = useState(0);
	// useLayoutEffect(() => {
	useEffect(() => {
		console.log("=====Vào UseEffect");
		if (value === 0) {
			setValue(Math.random());
		}
	}, [value]);
	return (
		<View>
			{console.log("Bên trong return")}
			<Text>Your Value: {value}</Text>
			<Button title="Click to change" onPress={() => setValue(0)}/>
		</View>
	);
};

function App() {
	return (
		<SafeAreaView >
			<NumberValue />
		</SafeAreaView>
	);
}

export default App;
