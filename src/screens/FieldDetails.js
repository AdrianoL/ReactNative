// src/screens/FieldDetails.js
import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { API_ROUTES } from '../config/apiRoutes';
import { AuthContext } from '../context/auth';

const FieldDetails = ({ route, navigation }) => {
	const { fieldId } = route.params;
	const [field, setField] = useState(null);
	const [user] = useContext(AuthContext);

	useEffect(() => {
		const fetchField = async () => {
			try {
				const response = await axios.get(API_ROUTES.FIELDS.GET_BY_ID(fieldId));
				setField(response.data);
			} catch (error) {
				console.error('Error al obtener la cancha:', error);
			}
		};
		fetchField();
	}, [fieldId]);

	const handleBooking = async () => {
		try {
			const bookingData = {
				date: new Date(), // Deberías permitir al usuario seleccionar la fecha
				startTime: '10:00',
				endTime: '12:00',
			};
			await axios.post(API_ROUTES.FIELDS.BOOK(fieldId), bookingData);
			alert('Reserva realizada con éxito');
		} catch (error) {
			console.error('Error al reservar la cancha:', error);
			alert('Error al reservar la cancha');
		}
	};

	if (!field) {
		return <Text>Cargando...</Text>;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.fieldName}>{field.name}</Text>
			<Text>{field.address}</Text>
			<Text>Precio: {field.bookingFee}</Text>
			{/* Muestra más detalles si es necesario */}
			<TouchableOpacity onPress={handleBooking} style={styles.button}>
				<Text style={styles.buttonText}>Reservar</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	// Estilos...
});

export default FieldDetails;
