import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

class AccountTypeSelector extends Component {
	state = { user: '' };
	updadeUser = (user) => {
		this.setState({ user: user });
		//console.log("frm account selector");
		console.log(user);
		this.props.onSubmit(user);
		
	};
	render() {
		return (
			<View>
				<Picker
					style={styles.picker}
					selectedValue={this.state.user}
					onValueChange={this.updadeUser}
				>
					<Picker.Item label="Select Account Type" value="student" />
					<Picker.Item label="Student" value="student" />
					<Picker.Item label="Faculty" value="faculty" />
				</Picker>
			</View>
		);
	}
}
export default AccountTypeSelector;

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
		alignSelf: 'center',
		color: 'red'
	},
	picker: {
		alignSelf: 'center',
		height: 50,
		width: 250,
		fontSize: 100,
		fontWeight: 'bold',
		color: 'blue'
	}
});
