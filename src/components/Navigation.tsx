// src/components/Navigation.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationScreen from './NavigationScreen';
import { AuthProvider } from '../context/auth';

const Navigation: React.FC = () => {
	return (
		<NavigationContainer>
			<AuthProvider>
				<NavigationScreen />
			</AuthProvider>
		</NavigationContainer>
	);
};

export default Navigation;
