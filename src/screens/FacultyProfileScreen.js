import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import HeaderNavigationBar from "../components/HeaderNavigationBar";
import FacultyHomeScreen from "./FacultyHomeScreen";

const FacultyProfileScreen = () => {
	return (
		<View style={styles.container1}>
			<View style={styles.container2}>
				<HeaderNavigationBar />
				<Text style={styles.header}>My Profile</Text>
			</View>
			<Image
				style={styles.profilePicture}
				source={require("../resources/Image/Faculty_avatar.png")}
			/>
		</View>
	);
};
FacultyProfileScreen.navigationOptions = ({ navigation }) => {
	return {
		title: "My Profile",
		headerLeft: <HeaderNavigationBar navigation={navigation} />
	};
};
const styles = StyleSheet.create({
	container1: {
		flex: 1
	},
	container2: {
		height: 70,
		flexDirection: "row",
		backgroundColor: "#7f7fff"
		//justifyContent: "space-between"
	},
	header: {
		fontSize: 25,
		marginTop: 25,
		marginLeft: 80
	},
	profilePicture: {
		marginTop: 10,
		height: 160,
		width: 130,
		alignSelf: "center"
	}
});

export default FacultyProfileScreen;
