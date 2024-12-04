// src/screens/Login.tsx

import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	ActivityIndicator,
	Alert,
	KeyboardAvoidingView,
	Platform,
	Image,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/authSlice';
import axios from 'axios';
import { API_ROUTES } from '../config/apiRoutes';
import { AppDispatch } from '../store';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Login: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const navigation = useNavigation();

	const [processing, setProcessing] = useState(false);

	const loginValidationSchema = Yup.object().shape({
		email: Yup.string().required('El usuario es requerido'),
		password: Yup.string().required('La contraseña es requerida'),
	});

	const handleLogin = async (values: { email: string; password: string }) => {
		setProcessing(true);
		try {
			const response = await axios.post(API_ROUTES.LOGIN, {
				email: values.email,
				password: values.password,
			});

			const userData = response.data;
			dispatch(setUser(userData));
			// Almacena los datos de usuario de forma segura si es necesario
			setProcessing(false);
			navigation.navigate('Home');
		} catch (error) {
			setProcessing(false);
			Alert.alert('Error', 'Usuario o contraseña incorrectos');
		}
	};

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}
		>
			<View style={styles.logoContainer}>
				<Image
					source={require('../assets/images/copa_logo.png')}
					style={styles.logo}
				/>
			</View>
			<View style={styles.loginContainer}>
				<Text style={styles.headerText}>Agent Login</Text>
				<Formik
					initialValues={{ email: '', password: '' }}
					validationSchema={loginValidationSchema}
					onSubmit={handleLogin}
				>
					{({
						handleChange,
						handleBlur,
						handleSubmit,
						values,
						errors,
						touched,
					}) => (
						<>
							{errors.email && touched.email && (
								<Text style={styles.errorMessage}>{errors.email}</Text>
							)}
							<View style={styles.inputField}>
								<TextInput
									style={styles.input}
									placeholder="User ID"
									value={values.email}
									onChangeText={handleChange('email')}
									onBlur={handleBlur('email')}
									autoCapitalize="none"
									returnKeyType="next"
								/>
							</View>
							{errors.password && touched.password && (
								<Text style={styles.errorMessage}>{errors.password}</Text>
							)}
							<View style={styles.inputField}>
								<TextInput
									style={styles.input}
									placeholder="Password"
									value={values.password}
									onChangeText={handleChange('password')}
									onBlur={handleBlur('password')}
									secureTextEntry
									returnKeyType="done"
									onSubmitEditing={() => handleSubmit()}
								/>
							</View>
							<TouchableOpacity
								style={[
									styles.button,
									!(values.email && values.password) && styles.buttonDisabled,
								]}
								onPress={() => handleSubmit()}
								disabled={!(values.email && values.password)}
							>
								{processing ? (
									<ActivityIndicator color="#fff" />
								) : (
									<Text style={styles.buttonText}>Login</Text>
								)}
							</TouchableOpacity>
						</>
					)}
				</Formik>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#c3c3c3',
		justifyContent: 'center',
	},
	logoContainer: {
		alignItems: 'center',
		marginBottom: 20,
	},
	logo: {
		width: 200,
		height: 100,
		resizeMode: 'contain',
	},
	loginContainer: {
		backgroundColor: 'rgba(239, 239, 239, 0.7)',
		padding: 20,
		marginHorizontal: 20,
		borderRadius: 10,
	},
	headerText: {
		textAlign: 'center',
		marginVertical: 20,
		color: '#2260A4',
		fontSize: 20,
		fontWeight: 'bold',
	},
	errorMessage: {
		backgroundColor: 'rgba(255, 58, 9, 0.50)',
		padding: 10,
		marginBottom: 10,
		fontSize: 12,
		color: 'rgba(101, 23, 4, 1.00)',
		textAlign: 'center',
	},
	inputField: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#FFF',
		marginBottom: 10,
		borderRadius: 5,
		paddingHorizontal: 10,
	},
	input: {
		flex: 1,
		fontSize: 16,
		color: '#000',
		paddingVertical: 10,
	},
	button: {
		backgroundColor: '#2260A4',
		padding: 15,
		borderRadius: 24,
		alignItems: 'center',
		marginTop: 10,
	},
	buttonDisabled: {
		backgroundColor: '#999',
	},
	buttonText: {
		color: '#FFF',
		fontSize: 18,
		fontWeight: 'bold',
	},
});
