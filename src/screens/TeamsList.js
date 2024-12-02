// src/screens/TeamsList.js
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

const TeamsList = ({ navigation }) => {
	const [teams, setTeams] = useState([]);

	useEffect(() => {
		const fetchTeams = async () => {
			try {
				const response = await axios.get(API_ROUTES.TEAMS.GET_ALL);
				setTeams(response.data);
			} catch (error) {
				console.error('Error al obtener los equipos:', error);
			}
		};
		fetchTeams();
	}, []);

	const renderItem = ({ item }) => (
		<TouchableOpacity
			style={styles.teamItem}
			onPress={() => navigation.navigate('TeamDetails', { teamId: item._id })}
		>
			<Text style={styles.teamName}>{item.name}</Text>
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<FlatList
				data={teams}
				keyExtractor={(item) => item._id}
				renderItem={renderItem}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	// Estilos...
});

export default TeamsList;
