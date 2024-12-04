// src/screens/Home.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Bienvenido a la App de Torneos</Text>
			<TouchableOpacity
				onPress={() => navigation.navigate('FieldsList')}
				style={styles.button}
			>
				<Text style={styles.buttonText}>Ver Canchas</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => navigation.navigate('TeamsList')}
				style={styles.button}
			>
				<Text style={styles.buttonText}>Ver Equipos</Text>
			</TouchableOpacity>
			{/* Añade más opciones según sea necesario */}
		</View>
	);
};

const styles = StyleSheet.create({
	// Estilos...
});

export default Home;
