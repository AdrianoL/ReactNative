// src/components/utils/MaterialTextInput.js
import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet, Animated } from 'react-native';

const MaterialTextInput = ({
	label,
	value,
	onChangeText,
	secureTextEntry,
	keyboardType,
}) => {
	const [isFocused, setIsFocused] = useState(false);
	const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;

	useEffect(() => {
		Animated.timing(animatedIsFocused, {
			toValue: isFocused || value ? 1 : 0,
			duration: 200,
			useNativeDriver: false,
		}).start();
	}, [isFocused, value]);

	const labelStyle = {
		position: 'absolute',
		left: 0,
		top: animatedIsFocused.interpolate({
			inputRange: [0, 1],
			outputRange: [18, 0],
		}),
		fontSize: animatedIsFocused.interpolate({
			inputRange: [0, 1],
			outputRange: [16, 12],
		}),
		color: animatedIsFocused.interpolate({
			inputRange: [0, 1],
			outputRange: ['#aaa', '#000'],
		}),
	};

	return (
		<View style={styles.container}>
			<Animated.Text style={labelStyle}>{label}</Animated.Text>
			<TextInput
				value={value}
				onChangeText={onChangeText}
				style={styles.input}
				secureTextEntry={secureTextEntry}
				keyboardType={keyboardType}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { paddingTop: 18, marginBottom: 20 },
	input: {
		height: 40,
		fontSize: 16,
		color: '#000',
		borderBottomWidth: 1,
		borderBottomColor: '#555',
	},
});

export default MaterialTextInput;
