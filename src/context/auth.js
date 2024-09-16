import React, { useState, useEffect, createContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null); // Inicializar como null

	// Navigation
	const navigation = useNavigation();

	// Configuración de Axios
	useEffect(() => {
		const token = user?.access_token || '';
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	}, [user]);

	// Interceptar errores de token expirado o 401
	axios.interceptors.response.use(
		(response) => response,
		async (error) => {
			const res = error.response;
			if (res?.status === 401 && res.config && !res.config._isRetryRequest) {
				await AsyncStorage.removeItem('auth-rn');
				setUser(null);
				navigation.navigate('SignIn');
			}
			return Promise.reject(error);
		},
	);

	useEffect(() => {
		const loadFromAsyncStorage = async () => {
			const data = await AsyncStorage.getItem('auth-rn');
			if (data) {
				const parsed = JSON.parse(data);
				setUser(parsed);
			} else {
				console.log('No data found in AsyncStorage');
			}
		};
		loadFromAsyncStorage();
	}, []);

	return (
		<AuthContext.Provider value={[user, setUser]}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
