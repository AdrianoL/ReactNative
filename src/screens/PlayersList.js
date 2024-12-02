// src/screens/PlayersList.js
import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import axios from 'axios';
import { API_ROUTES } from '../config/apiRoutes';

const PlayersList = ({ navigation }) => {
	const [players, setPlayers] = useState([]);

	useEffect(() => {
		const fetchPlayers = async () => {
			try {
				const response = await axios.get(API_ROUTES.PLAYERS.GET_ALL);
				setPlayers(response.data);
			} catch (error) {
				console.error('Error al obtener los jugadores:', error);
			}
		};
		fetchPlayers();
	}, []);

	const renderItem = ({ item }) => (
		<TouchableOpacity
			style={styles.playerItem}
			onPress={() =>
				navigation.navigate('PlayerDetails', { playerId: item._id })
			}
		>
			<Text style={styles.playerName}>{item.name}</Text>
			<Text>Posición: {item.position}</Text>
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<FlatList
				data={players}
				keyExtractor={(item) => item._id}
				renderItem={renderItem}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1, padding: 16 },
	playerItem: { padding: 16, borderBottomWidth: 1, borderColor: '#ccc' },
	playerName: { fontSize: 18, fontWeight: 'bold' },
});

export default PlayersList;
