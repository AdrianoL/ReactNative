// src/navigation/AppStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Account from '../screens/Account';
import Post from '../screens/Post';
import Links from '../screens/Links';
import Tournaments from '../screens/Tournaments';
// import TournamentDetail from '../screens/TournamentDetail';

import HeaderTabs from '../components/header/HeaderTabs';

const Stack = createNativeStackNavigator();

const AppStack = () => (
	<Stack.Navigator initialRouteName="Home">
		<Stack.Screen
			name="Home"
			component={Home}
			options={{ headerRight: () => <HeaderTabs /> }}
		/>
		<Stack.Screen name="Account" component={Account} />
		<Stack.Screen name="Post" component={Post} />
		<Stack.Screen name="Links" component={Links} />
		<Stack.Screen name="Tournaments" component={Tournaments} />
		{/* <Stack.Screen name="TournamentDetail" component={TournamentDetail} /> */}
	</Stack.Navigator>
);

export default AppStack;
