import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import QuestionForm from "../components/QuestionForm";
import { Context as QuizContext } from "../context/QuizContext";
import { navigate } from "../navigationRef";
const CreateQuestion = ({ navigation }) => {
	const { state, addQuestion } = useContext(QuizContext);

	return (
		<View>
			<QuestionForm
				onSubmit={(question, optA, optB, optC, optD, answer) => {
					addQuestion(question, optA, optB, optC, optD, answer);
				}}
				route="CreateQuiz"
			/>
		</View>
	);
};
const styles = StyleSheet.create({});
export default CreateQuestion;
