// src/screens/Payments.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { API_ROUTES } from '../config/apiRoutes';
import { AuthContext } from '../context/auth';

const Payments = () => {
	const [payments, setPayments] = useState([]);
	const [user] = React.useContext(AuthContext);

	useEffect(() => {
		const fetchPayments = async () => {
			try {
				// Asegúrate de que tu API de pagos tiene un endpoint para obtener los pagos del usuario
				const response = await axios.get(
					`${API_ROUTES.PAYMENTS.GET_ALL}?userId=${user._id}`,
				);
				setPayments(response.data);
			} catch (error) {
				console.error('Error al obtener los pagos:', error);
			}
		};
		fetchPayments();
	}, [user]);

	const renderItem = ({ item }) => (
		<View style={styles.paymentItem}>
			<Text>Monto: {item.amount}</Text>
			<Text>Estado: {item.status}</Text>
			<Text>Fecha: {new Date(item.createdAt).toLocaleDateString()}</Text>
		</View>
	);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Mis Pagos</Text>
			<FlatList
				data={payments}
				keyExtractor={(item) => item._id}
				renderItem={renderItem}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1, padding: 16 },
	title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
	paymentItem: { padding: 16, borderBottomWidth: 1, borderColor: '#ccc' },
});

export default Payments;
