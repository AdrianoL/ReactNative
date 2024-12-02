// src/screens/TeamDetails.js
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

const TeamDetails = ({ route, navigation }) => {
	const { teamId } = route.params;
	const [team, setTeam] = useState(null);

	useEffect(() => {
		const fetchTeam = async () => {
			try {
				const response = await axios.get(API_ROUTES.TEAMS.GET_BY_ID(teamId));
				setTeam(response.data);
			} catch (error) {
				console.error('Error al obtener el equipo:', error);
			}
		};
		fetchTeam();
	}, [teamId]);

	if (!team) {
		return <Text>Cargando...</Text>;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.teamName}>{team.name}</Text>
			<Text>Jugadores:</Text>
			<FlatList
				data={team.players}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() =>
							navigation.navigate('PlayerDetails', { playerId: item._id })
						}
					>
						<Text>{item.name}</Text>
					</TouchableOpacity>
				)}
			/>
			{/* Añade más detalles y opciones según sea necesario */}
		</View>
	);
};

const styles = StyleSheet.create({
	// Estilos...
});

export default TeamDetails;
