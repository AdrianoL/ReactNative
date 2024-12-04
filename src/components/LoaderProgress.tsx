import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

interface LoaderProgressProps {
	isLoading: boolean;
	loadingText?: string;
}

const LoaderProgress: React.FC<LoaderProgressProps> = ({
	isLoading,
	loadingText = 'Please Wait...',
}) => {
	if (!isLoading) return null;

	return (
		<View style={styles.overlay}>
			<View style={styles.loaderContainer}>
				<ActivityIndicator size="large" color="#0000ff" />
				<Text style={styles.loadingText}>{loadingText}</Text>
			</View>
		</View>
	);
};

export default LoaderProgress;

const styles = StyleSheet.create({
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'rgba(0,0,0,0.6)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	loaderContainer: {
		backgroundColor: '#DDD',
		padding: 20,
		borderRadius: 8,
		alignItems: 'center',
	},
	loadingText: {
		marginTop: 10,
		fontSize: 13,
		color: '#AAA',
		textAlign: 'center',
	},
});
