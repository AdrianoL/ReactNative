import React, { useContext, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import AddRoom from '../screens/addRoom';
import SignUp from '../screens/signup';
import SignIn from '../screens/signin';
import Account from '../screens/account';
import Post from '../screens/post';
import Links from '../screens/links';
import { AuthContext } from '../context/auth';
import HeaderTabs from './header/HeaderTabs';
import { useNavigationState } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
	const [state] = useContext(AuthContext);
	console.log(state); // Para depurar la estructura de 'state'
	const authenticated = state && state.access_token && state.email;
	console.log('Auth:', authenticated); // Depura si 'authenticated' es verdadero o falso

	const currentRoute = useNavigationState((navState) => {
		return navState ? navState.routes[navState.index] : null;
	});

	useEffect(() => {
		if (currentRoute) {
			console.log('Current Route:', currentRoute.name);
		}
	}, [currentRoute]);

	return (
		<Stack.Navigator initialRouteName={authenticated ? 'Home' : 'SignIn'}>
			{authenticated ? (
				<>
					<Stack.Screen
						name="Home"
						component={Home}
						options={{ headerRight: () => <HeaderTabs /> }}
					/>
					<Stack.Screen name="Account" component={Account} />
					<Stack.Screen name="Post" component={Post} />
					<Stack.Screen name="Links" component={Links} />
					<Stack.Screen
						name="AddRoom"
						component={AddRoom}
						options={{ title: 'Añadir Sala' }}
					/>
				</>
			) : (
				<>
					<Stack.Screen name="SignUp" component={SignUp} />
					<Stack.Screen name="SignIn" component={SignIn} />
				</>
			)}
		</Stack.Navigator>
	);
};

export default NavigationScreen;
