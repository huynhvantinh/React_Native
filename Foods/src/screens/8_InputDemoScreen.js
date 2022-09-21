import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
    const [password, setPassword] = useState("");

    function handleChangeText(newValue){
        setPassword(newValue);
    }

    return (
        <View>
            <Text>Enter Text:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                // value="hihi"
                // onChangeText={newValue => setPassword(newValue)}
                onChangeText={(newValue) => handleChangeText(newValue)}
            />

            <Text>Bạn vừa nhập vào: {password}</Text>
            {password.length <= 4 ? <Text>Password must be longer 4 characters</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        padding: 10,
        borderColor: "black",
        borderRadius: 5,
        borderWidth: 1,
        height: 50
    }
});

export default TextScreen;
