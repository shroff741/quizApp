import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
const SearchBar = ({ term, onTermChange }) => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name="search" style={styles.iconStyle} />
			<TextInput
				style={styles.inputStyle}
				autoCapitalize="none"
				autoCorrect={false}
				placeholder="Search"
				placeholderTextColor="black"
				value={term}
				onChangeText={onTermChange}
				//onEndEditing ={()=>onTermSubmit()}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	backgroundStyle: {
		marginTop: 25,
		marginBottom: 10,
		backgroundColor: "#ccccff",
		height: 40,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: "row",
		width: 325
	},
	inputStyle: {
		borderColor: "black",
		fontSize: 18
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: "center",
		marginHorizontal: 15
	}
});
export default SearchBar;
