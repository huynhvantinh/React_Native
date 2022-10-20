import { useState, useEffect } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

import Input from "./Input";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";
import { GlobalStyles } from "../../constants/styles";

let amountIsValid = true;
let dateIsValid = true;
let descriptionIsValid = true;

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
    console.log("===========Vô ExpenseForm");
	const [inputs, setInputs] = useState({
		amount: defaultValues ? defaultValues.amount.toString(): "",
		date: defaultValues ? getFormattedDate(defaultValues.date) : "",
		description: defaultValues ? defaultValues.description : "",
	});

	function inputChangedHandler(inputIdentifier, enteredValue) {
		setInputs((curInputs) => {
			return {
				...curInputs,
				[inputIdentifier]: enteredValue
			};
		});

        if(inputIdentifier === "amount"){
            amountIsValid = true;
        }else if(inputIdentifier === "date"){
            dateIsValid = true;
        }else if(inputIdentifier === "description"){
            descriptionIsValid = true;
        }
	}

    

	function submitHandler() {
		const expenseData = {
			amount: +inputs.amount,
			date: new Date(inputs.date),
			description: inputs.description
		};

		amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
		dateIsValid = expenseData.date.toString() !== "Invalid Date";
        console.log("dateIsValid = " + expenseData.date.toString());
		descriptionIsValid = expenseData.description.trim().length > 0;

		if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
			//Alert.alert('Invalid input', 'Please check your input values');
			setInputs((curInputs) => {
				return {...curInputs};
				// return curInputs;
			});
			return;
		}

		onSubmit(expenseData);
	}

	const formIsInvalid = !amountIsValid || !dateIsValid || !descriptionIsValid;

    useEffect(() => {
        console.log("Vô useEffect");
        return () => {
            console.log("Vô cleanup");
        };
    });

	return (
		<View style={styles.form}>
			<Text style={styles.title}>Your Expense</Text>
			<View style={styles.inputsRow}>
				<Input
					style={styles.rowInput}
					label="Amount"
					invalid={!amountIsValid}
					textInputConfig={{
						keyboardType: "decimal-pad",
						onChangeText: inputChangedHandler.bind(this, "amount"),
						value: inputs.amount
					}}
				/>
				<Input
					style={styles.rowInput}
					label="Date"
					invalid={!dateIsValid}
					textInputConfig={{
						placeholder: "YYYY-MM-DD",
						maxLength: 10,
						onChangeText: inputChangedHandler.bind(this, "date"),
						value: inputs.date
					}}
				/>
			</View>
			<Input
				label="Description"
				invalid={!descriptionIsValid}
				textInputConfig={{
					multiline: true,
					// autoCapitalize: 'none'
					// autoCorrect: false // default is true
					onChangeText: inputChangedHandler.bind(this, "description"),
					value: inputs.description
				}}
			/>
			{formIsInvalid && (<Text style={styles.errorText}>Invalid input values - please check your entered data!</Text>)}

			<View style={styles.buttons}>
				<Button style={styles.button} mode="flat" onPress={onCancel}>Cancel</Button>
				<Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
			</View>
		</View>
	);
}

export default ExpenseForm;

const styles = StyleSheet.create({
	form: {
		marginTop: 40
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "white",
		marginVertical: 24,
		textAlign: "center"
	},
	inputsRow: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	rowInput: {
		flex: 1
	},
	errorText: {
		textAlign: "center",
		color: GlobalStyles.colors.error500,
		margin: 8
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	button: {
		minWidth: 120,
		marginHorizontal: 8
	}
});
