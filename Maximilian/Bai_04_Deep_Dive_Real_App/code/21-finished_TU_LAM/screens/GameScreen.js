import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, Text, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import GuessLogItem from "../components/game/GuessLogItem";

/**
 * GameScreen_CACH_1_OK
 */

function generateRandomBetween(min, max, exclude) {
	// const rndNum = Math.floor(Math.random() * (max - min)) + min; //Dùng cái này nếu để const MAX = 100;
	const rndNum = Math.floor(Math.random() * (max - min + 1)) + min; //OK
    console.log(`Vo HAM tao so ngau nhien: min = ${min} _____ max = ${max} _____ exclude = ${exclude} _____ rndNum = ${rndNum}`);
	if (rndNum === exclude) {
        console.log("TRUNG SO");
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
}

const MIN = 1;
const MAX = 99;

let minBoundary = MIN;
let maxBoundary = MAX;

function GameScreen({ userNumber, onGameOver }) {
	const initialGuess = generateRandomBetween(MIN, MAX, userNumber);//OK
	// const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);//KHÔNG OK - Sẽ có lúc bị lỗi vì tạo ra lỗi chạy vô số lần hàm generateRandomBetween
    console.log(`********** Vo GameScreen: initialGuess = ${initialGuess}`);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [guessRounds, setGuessRounds] = useState([initialGuess]);
	console.log("guessRounds",guessRounds);

	useEffect(() => {
        console.log(`Vo useEffect xet onGameOver: currentGuess= ${currentGuess} === userNumber= ${userNumber}`);
		if (currentGuess === userNumber) {
			// setTimeout(() => {
            onGameOver(guessRounds.length);
            // }, 4000);
			// minBoundary = MIN; //không để trong useEffect bên dưới thì để ở đây cũng được
			// maxBoundary = MAX; //không để trong useEffect bên dưới thì để ở đây cũng được
		}
	}, [currentGuess, userNumber, onGameOver]);

	//có đoạn này là để khi restart lại game thì vẫn đảm bảo minBoundary và maxBoundary có giá trị 1 và 99, để người chơi có thể chơi lại được
	useEffect(() => {
        console.log("GameScreen MOUNT");
		minBoundary = MIN;
		maxBoundary = MAX;
        return ()=>{
            console.log("GameScreen UN_MOUNT");
        }
	}, []);

    //////////
    console.log(`1: MinBoundary = ${minBoundary} ===== MaxBoundary = ${maxBoundary}`);
    useEffect(() => {
        console.log(`2: MinBoundary = ${minBoundary} ===== MaxBoundary = ${maxBoundary}`);
    });
    //////////

	function nextGuessHandler(direction) {
        console.log(`++++++++++ Vo nextGuessHandler: Min = ${minBoundary} _____ Max = ${maxBoundary} _____ currentGuess = ${currentGuess}`);
		// direction => 'lower', 'greater'
		if (
			(direction === "lower" && currentGuess < userNumber) ||
			(direction === "greater" && currentGuess > userNumber)
		) {
			Alert.alert("Don't lie!", "You know that this is wrong...", [
				{ text: "Sorry!", style: "cancel" }
			]);
			return;
		}

		if (direction === "lower") {
			maxBoundary = currentGuess-1;
		} else {
			minBoundary = currentGuess + 1;
		}

		const newRndNumber = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		);
        console.log(`3: Min = ${minBoundary} _____ Max = ${maxBoundary} _____ currentGuess = ${currentGuess} _____ newRndNumber = ${newRndNumber}`);
		setCurrentGuess(newRndNumber);
		setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
	}

	const guessRoundsListLength = guessRounds.length;

	return (
		<View style={styles.screen}>
			<TouchableOpacity onPress={()=>{Alert.alert("hihi")}}>
                <Title>Số bạn chọn là: {userNumber}</Title>
            </TouchableOpacity>
			{/* <Title>Opponent's Guess</Title> */}
			<NumberContainer>
                <View>
                    <Text style={styles.text1}>Computer's Guess: </Text>
                    <Text style={[styles.text1, styles.text2]}>{currentGuess}</Text>
                </View>
            </NumberContainer>

            {/* Phần báo máy tính điều chỉnh lại con số dự đoán */}
			<Card>
				<InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, "lower")} >
							<Ionicons name="md-remove" size={24} color="white" />
						</PrimaryButton>
					</View>

					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, "greater")} >
							<Ionicons name="md-add" size={24} color="white" />
						</PrimaryButton>
					</View>
				</View>
			</Card>

			<View style={styles.listContainer}>
				{/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
				<FlatList
					data={guessRounds}
					renderItem={(itemData) => (
						<GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />
					)}
					keyExtractor={(item) => item}
				/>
			</View>
		</View>
	);
}

export default GameScreen;

const styles = StyleSheet.create({
    text1:{
        fontSize:16,
        alignSelf:"center",
        color:"yellow",
        
    },
    text2:{
        fontSize:30,
        fontWeight:'bold'
    },
	screen: {
		flex: 1,
		padding: 24
	},
	instructionText: {
		marginBottom: 12
	},
	buttonsContainer: {
		flexDirection: "row"
	},
	buttonContainer: {
		flex: 1
	},
	listContainer: {
		flex: 1,
		padding: 16
	}
});
