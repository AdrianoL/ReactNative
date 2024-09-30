import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Home from '../screens/home';
import Account from '../screens/account';
import Post from '../screens/post';
import Links from '../screens/links';
import SignUp from '../screens/signup';
import SignIn from '../screens/signin';
import HeaderTabs from './header/HeaderTabs';

export type RootStackParamList = {
	Home: undefined;
	Account: undefined;
	Post: undefined;
	Links: undefined;
	SignUp: undefined;
	SignIn: undefined;
	ChartScreen: { roomName: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationScreen: React.FC = () => {
	const user = useSelector((state: RootState) => state.auth.user);
	const authenticated = user && user.access_token;

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
