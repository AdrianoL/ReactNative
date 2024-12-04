// src/screens/FieldsList.js
import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import axios from 'axios';
import { API_ROUTES } from '../config_/apiRoutes';

const FieldsList = ({ navigation }) => {
	const [fields, setFields] = useState([]);

	useEffect(() => {
		const fetchFields = async () => {
			try {
				const response = await axios.get(API_ROUTES.FIELDS.GET_ALL);
				setFields(response.data);
			} catch (error) {
				console.error('Error al obtener las canchas:', error);
			}
		};
		fetchFields();
	}, []);

	const renderItem = ({ item }) => (
		<TouchableOpacity
			style={styles.fieldItem}
			onPress={() => navigation.navigate('FieldDetails', { fieldId: item._id })}
		>
			<Text style={styles.fieldName}>{item.name}</Text>
			<Text>{item.address}</Text>
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<FlatList
				data={fields}
				keyExtractor={(item) => item._id}
				renderItem={renderItem}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	// Estilos...
});

export default FieldsList;
