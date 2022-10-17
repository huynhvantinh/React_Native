import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ContactScreen = ({navigation}) => {
  return (
    <View style={styles.center}>
        <Text>This is the Contact Screen</Text>
        <Button
            title="Go to ContactDetails Screen"
            onPress={() => navigation.navigate("ContactDetailStack")} // We added an onPress event which would navigate to the About screen
        />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default ContactScreen;