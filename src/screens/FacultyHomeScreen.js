import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import HeaderNavigationBar from "../components/HeaderNavigationBar";
import SearchBar from "../components/SearchBar";

const FacultyHomeScreen = ({ navigation }) => {
	const [Search, setSearch] = useState("");
	return (
		<View style={styles.container1}>
			<View style={styles.container2}>
				<HeaderNavigationBar />
				<SearchBar
					term={Search}
					onTermChange={setSearch}
					style={{ alignSelf: "stretch" }}
				/>
			</View>
			<TouchableOpacity style={styles.create}>
				<Text style={styles.text}> Create </Text>
				<Text style={styles.text}>New Quiz</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.create}>
				<Text style={styles.text}> Review </Text>
				<Text style={styles.text}>Quiz</Text>
			</TouchableOpacity>
		</View>
	);
};
FacultyHomeScreen.navigationOptions = ({ navigation }) => {
	return {
		title: "Home",
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
	create: {
		borderWidth: 3,
		alignItems: "center",
		marginVertical: 10,
		marginHorizontal: 20,
		borderTopLeftRadius: 20,
		borderBottomRightRadius: 20,
		backgroundColor: "#b2b2ff"
	},
	text: {
		fontSize: 40,
		fontFamily: "sans-serif-condensed"
	}
});

export default FacultyHomeScreen;
