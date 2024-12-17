// src/screens/StylesCommon.ts
import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#fff',
	},
	button: {
		backgroundColor: 'darkblue',
		padding: 15,
		marginVertical: 10,
		borderRadius: 8,
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: 'bold',
	},
	input: {
		borderBottomWidth: 1,
		borderColor: '#ccc',
		marginVertical: 10,
		height: 40,
	},
});
