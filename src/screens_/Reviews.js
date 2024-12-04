// src/screens/Reviews.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { API_ROUTES } from '../config_/apiRoutes';

const Reviews = ({ route }) => {
	const { targetType, targetId } = route.params;
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		const fetchReviews = async () => {
			try {
				const response = await axios.get(
					API_ROUTES.REVIEWS.GET_FOR_TARGET(targetType, targetId),
				);
				setReviews(response.data);
			} catch (error) {
				console.error('Error al obtener las reseñas:', error);
			}
		};
		fetchReviews();
	}, [targetType, targetId]);

	const renderItem = ({ item }) => (
		<View style={styles.reviewItem}>
			<Text style={styles.rating}>Calificación: {item.rating}</Text>
			<Text>{item.comment}</Text>
			<Text style={styles.user}>Por: {item.userId}</Text>
		</View>
	);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Reseñas</Text>
			<FlatList
				data={reviews}
				keyExtractor={(item) => item._id}
				renderItem={renderItem}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1, padding: 16 },
	title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
	reviewItem: { padding: 16, borderBottomWidth: 1, borderColor: '#ccc' },
	rating: { fontWeight: 'bold' },
	user: { fontStyle: 'italic', marginTop: 8 },
});

export default Reviews;
