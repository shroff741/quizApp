import React, { useState, useContext, useEffect } from "react";
import { Context as QuizContext } from "../context/QuizContext";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	FlatList
} from "react-native";
import { SafeAreaView } from "react-navigation";

const CreateQuizScreen = ({ navigation }) => {
	const { state, getQuestion, addQuiz } = useContext(QuizContext);
	const [QuizName, setQuizName] = useState("");
	const [QuizTime, setQuizTime] = useState("");
	useEffect(() => {
		getQuestion();
		const listener = navigation.addListener("didFocus", () => {
			//console.log({ state });
			getQuestion();
		});
		return () => {
			listener.remove();
		};
	}, []);
	return (
		<View>
			<SafeAreaView style={styles.container1}>
				<View style={styles.container2}>
					<Text style={styles.text}>Quiz Name : </Text>
					<TextInput
						style={styles.input}
						value={QuizName}
						onChangeText={setQuizName}
						autoCapitalize="none"
						autoCorrect={false}
					/>
				</View>
				<View style={styles.container2}>
					<Text style={styles.text}>Time Limit : </Text>
					<TextInput
						placeholder="In second"
						style={styles.input}
						value={QuizTime}
						onChangeText={setQuizTime}
						autoCapitalize="none"
						autoCorrect={false}
					/>
				</View>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("CreateQuestion");
					}}
				>
					<Text style={styles.button}> Add Question</Text>
				</TouchableOpacity>
				<View style={{ height: 240, marginBottom: 3 }}>
					<FlatList
						data={state}
						keyExtractor={(Question) => Question.question}
						renderItem={({ item }) => {
							return (
								<TouchableOpacity>
									<View style={styles.qBoxStyle}>
										<Text style={styles.questionStyle}>{item.question}</Text>
									</View>
								</TouchableOpacity>
							);
						}}
					/>
				</View>
				<TouchableOpacity
					onPress={() => {
						addQuiz(state, QuizName, QuizTime);
					}}
				>
					<Text style={styles.button}> Submit</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</View>
	);
};
const styles = StyleSheet.create({
	container1: {
		marginBottom: 10
	},
	input: {
		marginHorizontal: 20,
		borderWidth: 1.5,
		borderColor: "black",
		fontSize: 20,
		paddingVertical: 3,
		fontWeight: "bold",
		paddingHorizontal: 10
	},
	container2: {
		marginVertical: 7
	},
	text: {
		fontSize: 20,
		marginBottom: 5,
		fontWeight: "bold",
		color: "blue",
		marginHorizontal: 20
	},
	button: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 25,
		width: 200,
		backgroundColor: "#7f7fff",
		alignSelf: "center",
		marginVertical: 5,
		borderWidth: 1.5
	},
	questionStyle: {
		fontSize: 20,
		fontWeight: "bold"
	},
	qBoxStyle: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 3,
		paddingHorizontal: 10,
		borderWidth: 1,
		borderColor: "black",
		marginVertical: 2,
		marginHorizontal: 20,
		borderWidth: 1.5
	}
});

export default CreateQuizScreen;
