// src/components/Navigation.tsx
import React from 'react';
import NavigationScreen from './NavigationScreen';
import { AuthProvider } from '../context/auth';

const Navigation: React.FC = () => {
	return (
		<AuthProvider>
			<NavigationScreen />
		</AuthProvider>
	);
};

export default Navigation;
