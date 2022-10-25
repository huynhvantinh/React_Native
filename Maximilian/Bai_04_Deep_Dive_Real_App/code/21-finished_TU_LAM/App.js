import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors";

export default function App() {
	const [userNumber, setUserNumber] = useState();
	// const [gameIsOver, setGameIsOver] = useState(true); //ORIGINAL
	const [gameIsOver, setGameIsOver] = useState(false);
	const [guessRounds, setGuessRounds] = useState(0);
    console.log(`===============App: userNumber = ${userNumber} _____ gameIsOver = ${gameIsOver} _____ guessRounds = ${guessRounds}`);

	const [fontsLoaded] = useFonts({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
	});

	if (!fontsLoaded) {
        console.log("Chua load font xong");
		return <AppLoading />;
	}

	function pickedNumberHandler(pickedNumber) {
        console.log(`Vo pickedNumberHandler: pickedNumber = ${pickedNumber}`);
		setUserNumber(pickedNumber);
		// setGameIsOver(false); //Vì sửa lại giá trị ban đầu của gameIsOver là false nên không cần dòng này
	}

	function gameOverHandler(numberOfRounds) {
		setGameIsOver(true);
		// setTimeout(() => {
		setGuessRounds(numberOfRounds);
		// }, 4000);
	}

	function startNewGameHandler() {
        console.log("Vo Start New Game");
		setUserNumber(null);
		setGuessRounds(0);
        setGameIsOver(false); //Mỗi lần start new game thì cho mọi thứ quay về như ban đầu
	}

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = (<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />);
	}

	// if (gameIsOver && userNumber) { //OK
	if (gameIsOver) { //OK - Với cách tự làm này thì ở đây không cần đến biến userNumber cũng OK
        console.log(`Vo gameIsOver && userNumber: gameIsOver = ${gameIsOver} _____ userNumber = ${userNumber}`);
		screen = (<GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} /> );
	}

	return (
		<LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen} >
			<ImageBackground
				source={require("./assets/images/background.png")}
				resizeMode="cover"
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
			>
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1
	},
	backgroundImage: {
		opacity: 0.15
	}
});
