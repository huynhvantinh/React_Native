import React from "react";
import { Modal, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";


/**
 * App_3.js - thử nghiệm presentation:"modal" - có vẻ như chỉ dùng cho stack
 * https://stackoverflow.com/questions/63274615/react-native-display-modal-from-react-navigation-drawer
 */

const HowToPlayModal = () => {
    return(
        // <Modal isVisible = {true}>
        //     <View style={styles.container2}>
        //     <View style={{flexDirection: 'row'}}>
        //         <Text style={styles.title}>How To Play</Text>
        //         <View style= {{flex:1, alignItems: 'flex-end'}}>
        //             <Text style={[styles.fieldTitle, {marginLeft: 0}]}>Remember?</Text>
        //             <Text style={styles.accent} >Sign In</Text>
        //         </View>      
        //     </View>
        //     </View>
        // </Modal>
        <SafeAreaView>
            <Text>HowToPlayModal</Text>
        </SafeAreaView>
    );
}

const Portfolio = ({navigation}) => {
    return <SafeAreaView>
        <Text>Portfolio</Text>
        <Button title="Play Modal" onPress={()=>navigation.navigate("HowToPlayModal")}/>
    </SafeAreaView>
}
const Account = () => {
    return <SafeAreaView>
        <Text>Account</Text>
    </SafeAreaView>
}
const NBALobby = () => {
    return <SafeAreaView>
        <Text>NBALobby</Text>
    </SafeAreaView>
}
const NFLLobby = () => {
    return <SafeAreaView>
        <Text>NFLLobby</Text>
    </SafeAreaView>
}


const Drawer = createDrawerNavigator();
// const RootStack = createStackNavigator();
const RootStack = createNativeStackNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="My Porfolio" component={Portfolio} />
			<Drawer.Screen name="Account" component={Account} />
			<Drawer.Screen name="NBA" component={NBALobby} />
			<Drawer.Screen name="NFL" component={NFLLobby} />
		</Drawer.Navigator>
	);
};

const RootStackScreen = () => {
	return (
		<NavigationContainer>
			{/* <RootStack.Navigator mode="modal"> */}
			<RootStack.Navigator screenOptions={{ presentation:"modal" }}>
				<RootStack.Screen name="Main" component={DrawerNavigator} options={{ headerShown: false }} />
				<RootStack.Screen name="HowToPlayModal" component={HowToPlayModal} />
			</RootStack.Navigator>
		</NavigationContainer>
	);
};

export default RootStackScreen;

const styles = {

}
