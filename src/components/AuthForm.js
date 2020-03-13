import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import AccountTypeSelector from "./AccountTypeSelector";
//import RNPickerSelect from 'react-native-picker-select';

const AuthForm = ({ header, onSubmit, buttonName, errorMessage }) => {
	const [name, setName] = useState("");
	const [username, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [accountType, setAccountType] = useState("student");
	return (
		<View>
			<Image
				source={require("../resources/Image/logo.jpg")}
				style={{ alignSelf: "center" }}
			/>
			<Spacer>
				<Text h3 style={{ alignSelf: "center" }}>
					{header}{" "}
				</Text>
			</Spacer>
			<AccountTypeSelector
				onSubmit={(acount) => {
					setAccountType({ accountType: acount });
				}}
			/>
			<Input
				label="Name"
				value={name}
				onChangeText={setName}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<Spacer />
			<Input
				label="User Name"
				value={username}
				onChangeText={setUserName}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<Spacer />
			<Input
				label="Email Id"
				value={email}
				onChangeText={setEmail}
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
			{/* <CheckBox
                style={{backgroundColor:'black',alignSelf: 'center'}}
                title ="Remember Me"
                checked ={check}
                onPress={()=>{setCheck(!check)}}
            /> */}
			{errorMessage ? (
				<Text style={styles.errorMessage}>{errorMessage}</Text>
			) : null}
			<Spacer>
				<Button
					title={buttonName}
					onPress={() => {
						//console.log("frm form");
						//console.log(accountType.accountType);
						onSubmit(name, username, email, password, accountType.accountType);
					}}
				/>
			</Spacer>
		</View>
	);
};
const styles = StyleSheet.create({
	errorMessage: {
		fontSize: 16,
		color: "red",
		marginLeft: 15,
		marginTop: 15
	}
});

export default AuthForm;
