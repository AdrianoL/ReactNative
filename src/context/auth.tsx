// src/context/auth.tsx
import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';

interface User {
	access_token: string;
	email: string;
	firstname: string;
	lastname: string;
	image?: {
		url: string;
		public_id: string;
	};
}

type AuthContextType = [
	User | null,
	React.Dispatch<React.SetStateAction<User | null>>,
];

const AuthContext = createContext<AuthContextType>([null, () => { }]);

const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	// Configuración de Axios
	useEffect(() => {
		const token = user?.access_token || '';
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	}, [user]);

	// Interceptor de errores
	useEffect(() => {
		const interceptor = axios.interceptors.response.use(
			(response) => response,
			async (error) => {
				if (error.response?.status === 401 && !error.config._retry) {
					await EncryptedStorage.removeItem('auth-rn');
					setUser(null);
				}
				return Promise.reject(error);
			},
		);
		return () => {
			axios.interceptors.response.eject(interceptor);
		};
	}, []);

	useEffect(() => {
		const loadFromStorage = async () => {
			try {
				const data = await EncryptedStorage.getItem('auth-rn');
				if (data) {
					const parsedUser: User = JSON.parse(data);
					setUser(parsedUser);
				}
			} catch (error) {
				console.error('Error loading user data:', error);
			}
		};
		loadFromStorage();
	}, []);

	return (
		<AuthContext.Provider value={[user, setUser]}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
