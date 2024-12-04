// src/screens/SignUp.js
import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../context_/auth';
import MaterialTextInput from '../components_/utils/MaterialTextInput';
import { API_ROUTES } from '../config_/apiRoutes';

const SignUp = ({ navigation }) => {
	const [firstname, setFirstname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useContext(AuthContext);

	const handleSignUp = async () => {
		try {
			const response = await axios.post(API_ROUTES.AUTH.REGISTER, {
				firstname,
				email,
				password,
			});
			setUser(response.data);
			await AsyncStorage.setItem('auth-rn', JSON.stringify(response.data));
		} catch (error) {
			console.error('Error al registrarse:', error);
			alert('Error al registrarse');
		}
	};

	return (
		<View style={styles.container}>
			<MaterialTextInput
				label="Nombre"
				value={firstname}
				onChangeText={setFirstname}
			/>
			<MaterialTextInput
				label="Correo Electrónico"
				value={email}
				onChangeText={setEmail}
				keyboardType="email-address"
			/>
			<MaterialTextInput
				label="Contraseña"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>
			<TouchableOpacity onPress={handleSignUp} style={styles.button}>
				<Text style={styles.buttonText}>Registrarse</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
				<Text style={styles.linkText}>¿Ya tienes cuenta? Inicia Sesión</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	// Estilos...
});

export default SignUp;
