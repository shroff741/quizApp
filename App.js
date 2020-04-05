import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator, HeaderBackground } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as QuizProvider } from "./src/context/QuizContext";
import { setNavigator } from "./src/navigationRef";
import LoadingScreen from "./src/screens/LoadingScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import FacultyHomeScreen from "./src/screens/FacultyHomeScreen";
import FacultyProfileScreen from "./src/screens/FacultyProfileScreen";
import FacultyLogoutScreen from "./src/screens/FacultyLogoutScreen";
import CreateQuizScreen from "./src/screens/CreateQuizScreen";
import CreateQuestionScreen from "./src/screens/CreateQuestionScreen";

const switchNavigator = createSwitchNavigator({
	//Loader: LoadingScreen,
	// loginFlow: createStackNavigator(
	// 	{
	// 		Signup: SignupScreen,
	// 		Signin: SigninScreen
	// 	},
	// 	{
	// 		defaultNavigationOptions: {
	// 			headerShown: false
	// 		}
	// 	}
	// ),
	mainFlow: createDrawerNavigator(
		{
			FacultyHome: createStackNavigator({
				Home: FacultyHomeScreen,
				CreateQuiz: CreateQuizScreen,
				CreateQuestion: CreateQuestionScreen
				//EditQuiz: EditQuizScreen
			}),
			FacultyProfile: FacultyProfileScreen,
			FacultyLogout: FacultyLogoutScreen
		},
		{
			defaultNavigationOptions: {
				headerShown: true
			}
		}
	),
	Account: AccountScreen,
	ForgotPassword: ForgotPasswordScreen
});
const App = createAppContainer(switchNavigator);

export default () => {
	return (
		<QuizProvider>
			<AuthProvider>
				<App
					ref={(navigator) => {
						setNavigator(navigator);
					}}
				/>
			</AuthProvider>
		</QuizProvider>
	);
};
