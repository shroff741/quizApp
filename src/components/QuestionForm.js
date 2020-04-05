import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";

const QuestionForm = ({ navigation, onSubmit, route }) => {
	const [question, setQuestion] = useState("");
	const [optA, setoptA] = useState("");
	const [optB, setoptB] = useState("");
	const [optC, setoptC] = useState("");
	const [optD, setoptD] = useState("");
	const [answer, setAnswer] = useState("");

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Question</Text>
			<TextInput
				style={styles.input}
				value={question}
				onChangeText={setQuestion}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<Text style={styles.text}>Option A</Text>
			<TextInput
				style={styles.input}
				value={optA}
				onChangeText={setoptA}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<Text style={styles.text}>Option B</Text>
			<TextInput
				style={styles.input}
				value={optB}
				onChangeText={setoptB}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<Text style={styles.text}>Option C</Text>
			<TextInput
				style={styles.input}
				value={optC}
				onChangeText={setoptC}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<Text style={styles.text}>Option D</Text>
			<TextInput
				style={styles.input}
				value={optD}
				onChangeText={setoptD}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<Text style={styles.text}>Answer</Text>
			<TextInput
				style={styles.input}
				value={answer}
				onChangeText={setAnswer}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<TouchableOpacity
				onPress={() => {
					onSubmit(question, optA, optB, optC, optD, answer);
					navigation.navigate(route);
				}}
			>
				<Text style={styles.button}> Submit</Text>
			</TouchableOpacity>
		</View>
	);
};
const styles = StyleSheet.create({
	input: {
		borderWidth: 1.5,
		borderColor: "black",
		paddingLeft: 5,
		fontSize: 15,
		paddingVertical: 2,
		fontWeight: "bold",
		marginBottom: 10,
		borderRadius: 10
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
		color: "blue",
		marginBottom: 5
	},
	container: {
		marginHorizontal: 25,
		marginTop: 10
	},
	button: {
		textAlign: "center", // <-- the magic
		fontWeight: "bold",
		fontSize: 25,
		width: 200,
		backgroundColor: "#7f7fff",
		alignSelf: "center",
		marginTop: 5,
		borderWidth: 1.5
	}
});
export default withNavigation(QuestionForm);
