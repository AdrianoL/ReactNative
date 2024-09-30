// src/screens/ChartScreen.tsx

import React from 'react';
import { View, Text } from 'react-native';

const ChartScreen: React.FC<{ route: { params: { roomName: string } } }> = ({
	route,
}) => {
	const { roomName } = route.params;
	return (
		<View>
			<Text>{`Estás en la sala: ${roomName}`}</Text>
		</View>
	);
};

export default ChartScreen;
