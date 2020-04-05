import React, { useContext } from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import LinkFrom from "../components/LinkForm";
import { NavigationEvents, SafeAreaView } from "react-navigation";
import Constants from "expo-constants";
const SignupScreen = ({ navigation }) => {
	const { state, signup, clearErrorMessage } = useContext(AuthContext);
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<NavigationEvents onWillBlur={clearErrorMessage} />
				<AuthForm
					header="Sign Up"
					onSubmit={(name, username, email, password, accountType) => {
						signup({ name, username, email, password, accountType });
					}}
					buttonName="Sign Up"
					errorMessage={state.errorMessage}
				/>
				<LinkFrom
					message1="Already have an account ?"
					message2="Sign In instead"
					route="Signin"
				/>
			</ScrollView>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Constants.statusBarHeight,
		marginBottom: 10
	}
	// scrollview: {
	// 	paddingBottom: 30
	// }
});

export default SignupScreen;
