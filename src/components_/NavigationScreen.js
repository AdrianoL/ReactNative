// src/components/NavigationScreen.js
import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context_/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens_/Home';
import SignIn from '../screens_/SignIn';
import SignUp from '../screens_/SignUp';
import Account from '../screens_/Account';
import FieldsList from '../screens_/FieldsList';
import FieldDetails from '../screens_/FieldDetails';
import TeamsList from '../screens_/TeamsList';
import TeamDetails from '../screens_/TeamDetails';
import PlayersList from '../screens_/PlayersList';
import PlayerDetails from '../screens_/PlayerDetails';
import Payments from '../screens_/Payments';
import Reviews from '../screens_/Reviews';

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
	const [user, setUser] = useContext(AuthContext);

	const handleLogout = async () => {
		setUser(null);
		await AsyncStorage.removeItem('auth-rn');
	};

	const authenticated = user && user.access_token;

	return (
		<Stack.Navigator>
			{authenticated ? (
				<>
					<Stack.Screen
						name="Home"
						component={Home}
						options={{
							title: 'Inicio',
							headerRight: () => (
								<TouchableOpacity
									onPress={handleLogout}
									style={{ marginRight: 10 }}
								>
									<Icon name="logout" size={24} color="black" />
								</TouchableOpacity>
							),
						}}
					/>
					<Stack.Screen
						name="Account"
						component={Account}
						options={{ title: 'Mi Cuenta' }}
					/>
					<Stack.Screen
						name="FieldsList"
						component={FieldsList}
						options={{ title: 'Canchas' }}
					/>
					<Stack.Screen
						name="FieldDetails"
						component={FieldDetails}
						options={{ title: 'Detalles de Cancha' }}
					/>
					<Stack.Screen
						name="TeamsList"
						component={TeamsList}
						options={{ title: 'Equipos' }}
					/>
					<Stack.Screen
						name="TeamDetails"
						component={TeamDetails}
						options={{ title: 'Detalles de Equipo' }}
					/>
					<Stack.Screen
						name="PlayersList"
						component={PlayersList}
						options={{ title: 'Jugadores' }}
					/>
					<Stack.Screen
						name="PlayerDetails"
						component={PlayerDetails}
						options={{ title: 'Detalles de Jugador' }}
					/>
					<Stack.Screen
						name="Payments"
						component={Payments}
						options={{ title: 'Pagos' }}
					/>
					<Stack.Screen
						name="Reviews"
						component={Reviews}
						options={{ title: 'Reseñas' }}
					/>
					{/* Añade más pantallas según sea necesario */}
				</>
			) : (
				<>
					<Stack.Screen
						name="SignIn"
						component={SignIn}
						options={{ title: 'Iniciar Sesión' }}
					/>
					<Stack.Screen
						name="SignUp"
						component={SignUp}
						options={{ title: 'Registrarse' }}
					/>
				</>
			)}
		</Stack.Navigator>
	);
};

export default NavigationScreen;
