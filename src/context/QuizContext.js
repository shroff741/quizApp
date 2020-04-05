import createDataContext from "../context/creatDataContext";
import quizLink from "../api/quizLink";
const quizReducer = (state, action) => {
	switch (action.type) {
		case "add_question":
			return [...state, action.payload];
		case "get_question":
			return state;
		default:
			return state;
	}
};
const addQuiz = (dispatch) => {
	return async (QuizName, QuizTime) => {
		await quizLink.post("/Quizes", {
			QuizName: QuizName,
			QuizTime: QuizTime
		});
	};
};
const addQuestion = (dispatch) => {
	return (question, optA, optB, optC, optD, answer) => {
		dispatch({
			type: "add_question",
			payload: {
				question: question,
				optA: optA,
				optB: optB,
				optC: optC,
				optD: optD,
				answer: answer
			}
		});
	};
};
const getQuestion = (dispatch) => {
	return () => {
		dispatch({ type: "get_question" });
	};
};
export const { Provider, Context } = createDataContext(
	quizReducer,
	{ addQuestion, getQuestion, addQuiz },
	[]
);
