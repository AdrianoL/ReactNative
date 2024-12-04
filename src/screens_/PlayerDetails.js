// src/screens/PlayerDetails.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { API_ROUTES } from '../config_/apiRoutes';

const PlayerDetails = ({ route }) => {
	const { playerId } = route.params;
	const [player, setPlayer] = useState(null);

	useEffect(() => {
		const fetchPlayer = async () => {
			try {
				const response = await axios.get(
					API_ROUTES.PLAYERS.GET_BY_ID(playerId),
				);
				setPlayer(response.data);
			} catch (error) {
				console.error('Error al obtener el jugador:', error);
			}
		};
		fetchPlayer();
	}, [playerId]);

	if (!player) {
		return <Text>Cargando detalles del jugador...</Text>;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.playerName}>{player.name}</Text>
			<Text>Edad: {player.age}</Text>
			<Text>Posición: {player.position}</Text>
			{/* Agrega más detalles según sea necesario */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1, padding: 16 },
	playerName: { fontSize: 24, fontWeight: 'bold' },
});

export default PlayerDetails;
