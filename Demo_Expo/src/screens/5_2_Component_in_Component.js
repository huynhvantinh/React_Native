import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import ComponentWrapComponent from "../components/ComponentWrapComponent";

const ComponentInComponent = (props) => {
    console.log("Vào 5_2_Component_in_Component Screen");

    return (
        <View style={{ flex:1 }}>
            <ComponentWrapComponent>
                <ComponentWrapComponent/>
            </ComponentWrapComponent>
        </View>
        
        
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentInComponent;
