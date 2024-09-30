// src/screens/signup.tsx

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import MaterialTextInput from '../components/utils/MaterialTextInput';
import { API_ROUTES } from '../config/apiRoutes';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AppDispatch } from '../store';
import { setUser } from '../slices/authSlice';

interface SignUpValues {
	name: string;
	email: string;
	password: string;
}

const SignUp: React.FC = ({ navigation }) => {
	const dispatch = useDispatch<AppDispatch>();

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Nombre es requerido'),
		email: Yup.string().email('Email inválido').required('Email es requerido'),
		password: Yup.string()
			.min(6, 'Mínimo 6 caracteres')
			.required('Contraseña es requerida'),
	});

	const handleSubmit = async (values: SignUpValues) => {
		try {
			const response = await axios.post(API_ROUTES.REGISTER, values);
			const userData = response.data;
			dispatch(setUser(userData));
			await EncryptedStorage.setItem('auth-rn', JSON.stringify(userData));
			Alert.alert('Éxito', 'Registro exitoso');
			navigation.navigate('Home');
		} catch (error) {
			console.error(error);
			Alert.alert('Error', 'No se pudo registrar');
		}
	};

	return (
		<KeyboardAwareScrollView contentContainerStyle={styles.container}>
			<Formik
				initialValues={{ name: '', email: '', password: '' }}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({
					handleChange,
					handleBlur,
					handleSubmit,
					values,
					errors,
					touched,
				}) => (
					<View style={styles.formContainer}>
						<MaterialTextInput
							label="NOMBRE"
							value={values.name}
							onChangeText={handleChange('name')}
							onBlur={handleBlur('name')}
							autoCapitalize="words"
						/>
						{errors.name && touched.name && (
							<Text style={styles.errorText}>{errors.name}</Text>
						)}
						<MaterialTextInput
							label="EMAIL"
							value={values.email}
							onChangeText={handleChange('email')}
							onBlur={handleBlur('email')}
							keyboardType="email-address"
						/>
						{errors.email && touched.email && (
							<Text style={styles.errorText}>{errors.email}</Text>
						)}
						<MaterialTextInput
							label="CONTRASEÑA"
							value={values.password}
							onChangeText={handleChange('password')}
							onBlur={handleBlur('password')}
							secureTextEntry
						/>
						{errors.password && touched.password && (
							<Text style={styles.errorText}>{errors.password}</Text>
						)}
						<TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle}>
							<Text style={styles.buttonText}>Registrarse</Text>
						</TouchableOpacity>
						<Text style={styles.loginText}>
							¿Ya está registrado?{' '}
							<Text
								style={styles.loginLink}
								onPress={() => navigation.navigate('SignIn')}
							>
								Iniciar Sesión
							</Text>
						</Text>
					</View>
				)}
			</Formik>
		</KeyboardAwareScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginHorizontal: 20,
	},
	formContainer: {
		marginVertical: 100,
	},
	buttonStyle: {
		backgroundColor: 'darkblue',
		height: 50,
		justifyContent: 'center',
		marginHorizontal: 15,
		borderRadius: 15,
		marginTop: 20,
	},
	buttonText: {
		fontSize: 20,
		textAlign: 'center',
		color: '#FFF',
		fontWeight: 'bold',
	},
	errorText: {
		fontSize: 12,
		color: 'red',
		marginHorizontal: 15,
		marginBottom: 5,
	},
	loginText: {
		fontSize: 12,
		textAlign: 'center',
		marginTop: 20,
	},
	loginLink: {
		color: 'darkblue',
		fontWeight: 'bold',
	},
});

export default SignUp;
