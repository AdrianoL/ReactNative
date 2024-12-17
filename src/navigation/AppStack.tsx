// src/navigation/AppStack.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Account from '../screens/Account';

import OcrScan from '../screens/OcrScan';
import ManualSearch from '../screens/ManualSearch';
import Result from '../screens/Result';
// import TournamentDetail from '../screens/TournamentDetail';

import HeaderTabs from '../components/header/HeaderTabs';

export type RootStackParamList = {
	Home: undefined;
	Account: undefined;
	OcrScan: undefined;
	ManualSearch: undefined;
	Result: { results: { rowNumber: number; data: string[] }[] };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => (
	<Stack.Navigator initialRouteName="Home">
		<Stack.Screen
			name="Home"
			component={Home}
			options={{ headerRight: () => <HeaderTabs /> }}
		/>
		<Stack.Screen name="Account" component={Account} />
		<Stack.Screen name="OcrScan" component={OcrScan} />
		<Stack.Screen name="ManualSearch" component={ManualSearch} />
		<Stack.Screen name="Result" component={Result} />
		{/* <Stack.Screen name="TournamentDetail" component={TournamentDetail} /> */}
	</Stack.Navigator>
);

export default AppStack;
