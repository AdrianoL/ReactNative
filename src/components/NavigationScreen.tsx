// src/components/NavigationScreen.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import AppStack from '../navigation/AppStack';
import AuthStack from '../navigation/AuthStack';

const NavigationScreen: React.FC = () => {
	const user = useSelector((state: RootState) => state.auth.user);
	const authenticated = !!user && !!user.accessToken;

	return (
		<NavigationContainer>
			{authenticated ? <AppStack /> : <AuthStack />}
		</NavigationContainer>
	);
};

export default NavigationScreen;
