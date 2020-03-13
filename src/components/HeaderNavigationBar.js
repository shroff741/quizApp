import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";
const HeaderNavigationBar = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TouchableHighlight
				style={styles.touchablehighlight}
				onPress={() => navigation.openDrawer()}
			>
				<FontAwesome name="bars" size={30} />
			</TouchableHighlight>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		height: 70,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center"
	},
	touchablehighlight: {
		marginLeft: 10,
		marginTop: 15
	}
});
export default withNavigation(HeaderNavigationBar);
