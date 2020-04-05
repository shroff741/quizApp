import React, { useContext, useState } from "react";
import {
	View,
	StyleSheet,
	Image,
	ScrollView,
	TouchableOpacity
} from "react-native";
import { Text, Input, CheckBox, Button } from "react-native-elements";
import { NavigationEvents, SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import LinkFrom from "../components/LinkForm";
import AccountTypeSelector from "../components/AccountTypeSelector";
import Constants from "expo-constants";

const SigninScreen = ({ navigation }) => {
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const { state, signin, clearErrorMessage } = useContext(AuthContext);
	const [accountType, setAccountType] = useState("student");
	const [check, setCheck] = useState(false);

	const onClick = () => {
		console.log(username);
		console.log(password);
		console.log(check);
		console.log(accountType.accountType);
		signin(username, password, accountType.accountType, check);
	};

	return (
		<SafeAreaView style={styles.container1}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<NavigationEvents onWillBlur={clearErrorMessage} />
				<Image
					source={require("../resources/Image/logo.jpg")}
					style={{ alignSelf: "center" }}
				/>
				<Spacer>
					<Text h3 style={{ alignSelf: "center" }}>
						Sign in to Your Account{" "}
					</Text>
				</Spacer>
				<AccountTypeSelector
					onSubmit={(acount) => {
						setAccountType({ accountType: acount });
					}}
				/>
				<Input
					label="User Name"
					value={username}
					onChangeText={setUserName}
					autoCapitalize="none"
					autoCorrect={false}
				/>
				<Spacer />
				<Input
					secureTextEntry={true}
					label="Password"
					value={password}
					onChangeText={setPassword}
					autoCapitalize="none"
					autoCorrect={false}
				/>
				<CheckBox
					style={{ backgroundColor: "black", alignSelf: "center" }}
					title="Remember Me"
					checked={check}
					onPress={() => {
						setCheck(!check);
						console.log(check);
					}}
				/>
				{state.errorMessage ? (
					<Text style={styles.errorMessage}>{state.errorMessage}</Text>
				) : null}
				<Spacer>
					<Button title="Sign In" onPress={onClick} />
				</Spacer>
				<View style={styles.container2}>
					<LinkFrom
						message1="Do not have an account ?"
						message2="Sign up first"
						route="Signup"
					/>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate("ForgotPassword");
						}}
					>
						<Text style={styles.forgotPassword}>Forgot</Text>
						<Text style={styles.forgotPassword}>Password ?</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	container1: {
		flex: 1,
		//marginBottom: 120,
		marginTop: Constants.statusBarHeight
	},
	errorMessage: {
		fontSize: 16,
		color: "red",
		marginLeft: 15,
		marginTop: 15
	},
	container2: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between"
	},
	forgotPassword: {
		color: "red",
		marginRight: 16
	}
});

export default SigninScreen;
