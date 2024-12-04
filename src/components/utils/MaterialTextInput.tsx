// src/components/utils/MaterialTextInput.tsx
import React, { useState, useRef, useEffect } from 'react';
import {
	View,
	TextInput,
	StyleSheet,
	Animated,
	TextInputProps,
} from 'react-native';

interface MaterialTextInputProps extends TextInputProps {
	label: string;
}

const MaterialTextInput: React.FC<MaterialTextInputProps> = ({
	label,
	value,
	onChangeText,
	...props
}) => {
	const [isFocused, setIsFocused] = useState(false);
	const focusAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(focusAnim, {
			toValue: isFocused || !!value ? 1 : 0,
			duration: 200,
			useNativeDriver: false,
		}).start();
	}, [focusAnim, isFocused, value]);

	const labelStyle = {
		position: 'absolute' as const,
		left: 0,
		top: focusAnim.interpolate({
			inputRange: [0, 1],
			outputRange: [18, 0],
		}),
		fontSize: focusAnim.interpolate({
			inputRange: [0, 1],
			outputRange: [16, 12],
		}),
		color: focusAnim.interpolate({
			inputRange: [0, 1],
			outputRange: ['#aaa', '#000'],
		}),
	};

	return (
		<View style={styles.container}>
			<Animated.Text style={labelStyle}>{label}</Animated.Text>
			<TextInput
				{...props}
				style={styles.textInput}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 18,
		marginVertical: 8,
	},
	textInput: {
		height: 40,
		fontSize: 16,
		color: '#000',
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
	},
});

export default MaterialTextInput;
