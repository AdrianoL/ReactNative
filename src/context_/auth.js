// src/context/auth.js
import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	// Configuración de Axios
	useEffect(() => {
		const token = user?.access_token || '';
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	}, [user]);

	// Interceptar respuestas no autorizadas
	useEffect(() => {
		const interceptor = axios.interceptors.response.use(
			(response) => response,
			async (error) => {
				if (error.response?.status === 401) {
					await AsyncStorage.removeItem('auth-rn');
					setUser(null);
				}
				return Promise.reject(error);
			},
		);
		return () => axios.interceptors.response.eject(interceptor);
	}, []);

	// Cargar usuario desde AsyncStorage
	useEffect(() => {
		const loadUser = async () => {
			const data = await AsyncStorage.getItem('auth-rn');
			if (data) {
				setUser(JSON.parse(data));
			}
		};
		loadUser();
	}, []);

	return (
		<AuthContext.Provider value={[user, setUser]}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
