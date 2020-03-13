import createDataContext from "../context/creatDataContext";
import BackendLink from "../api/BackendLink";
import { AsyncStorage } from "react-native"; // to store info on device
import { navigate } from "../navigationRef";
const authReducer = (state, action) => {
	switch (action.type) {
		case "add_error":
			return { ...state, errorMessage: action.payload };
		case "clear_err_message":
			return { ...state, errorMessage: "" };
		case "signin":
			//console.log("142");
			return { errorMessage: "", token: action.payload.token };
		case "signout":
			return { token: null, errorMessage: "" };
		default:
			return state;
	}
};
const tryLocalSignin = (dispatch) => async () => {
	const token = await AsyncStorage.getItem("token");
	console.log(token);
	if (token) {
		console.log("I am in");
		dispatch({ type: "signin", payload: token });
		navigate("QuizList");
	} else {
		console.log("I am out");
		navigate("loginFlow");
	}
};
const clearErrorMessage = (dispatch) => () => {
	dispatch({ type: "clear_err_message" });
};
const signup = (dispatch) => {
	return async ({ name, username, email, password, accountType }) => {
		// make api request to sign up with email and password
		// if we sign up, modify our state, and say we are authenticated
		// if signin fails, we need to reflect an error message

		try {
			const response = await BackendLink.post("/auth/signup", {
				name,
				username,
				email,
				password,
				accountType
			});
			//console.log(response.data.token);
			if (response.data.token) {
				navigate("Signin");
			} else {
				dispatch({
					type: "add_error",
					payload: "Something went wrong with sign up"
				});
			}
		} catch (err) {
			console.log(err);
			dispatch({
				type: "add_error",
				payload: "Something went wrong with sign up"
			});
		}
	};
};
const signin = (dispatch) => {
	return async (username, password, accountType, check) => {
		// console.log(username);
		// console.log(password);
		// console.log(accountType);
		// console.log(check);

		// Try to signin
		// Handle a success by updating state
		// Handle faliure by showing error message
		try {
			const response = await BackendLink.post("/auth/login", {
				username,
				password,
				accountType
			});
			console.log(response.data.token);
			if (response.data.token) {
				if (check) {
					await AsyncStorage.setItem("token", response.data.token);
				}
				dispatch({ type: "signin", payload: response.data.token });
				navigate("mainFlow"); // navigate to main flow
			} else {
				dispatch({
					type: "add_error",
					payload: "Something went wrong with sign in"
				});
			}
		} catch (err) {
			//console.log(err);
			dispatch({
				type: "add_error",
				payload: "Something went wrong with sign in"
			});
		}
	};
};
const signout = (dispatch) => {
	return async () => {
		await AsyncStorage.removeItem("token");
		dispatch({ type: "signout" });
		navigate("loginFlow");
	};
};
export const { Provider, Context } = createDataContext(
	authReducer,
	{ signin, signup, signout, clearErrorMessage, tryLocalSignin, signout },
	{ token: null, errorMessage: "" }
);
