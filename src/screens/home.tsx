// src/screens/home.tsx

import React from 'react';
import {
	StyleSheet,
	Text,
	SafeAreaView,
	TouchableOpacity,
	View,
} from 'react-native';
import { useNavigation, StackNavigationProp } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import FooterList from '../components/footer/FooterList';
import { RootState } from '../store';
import { RootStackParamList } from '../components/NavigationScreen';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home: React.FC = () => {
	const navigation = useNavigation<HomeScreenNavigationProp>();
	const user = useSelector((state: RootState) => state.auth.user);

	const rooms = ['Check In', 'Departures', 'Compensation'];

	const handleRoomPress = (room: string) => {
		navigation.navigate('ChartScreen', { roomName: room });
	};

	return (
		<>
			<SafeAreaView style={styles.homeContainer}>
				<View style={styles.contentContainer}>
					{rooms.map((room, index) => (
						<TouchableOpacity
							key={index}
							style={styles.button}
							onPress={() => handleRoomPress(room)}
						>
							<Text style={styles.buttonText}>{room}</Text>
						</TouchableOpacity>
					))}
				</View>
			</SafeAreaView>
			<SafeAreaView style={styles.footerContainer}>
				<FooterList />
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	homeContainer: {
		flex: 1,
		backgroundColor: '#c3c3c3',
	},
	contentContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingTop: 20,
	},
	button: {
		backgroundColor: 'white',
		width: '80%',
		padding: 15,
		borderRadius: 0,
		alignItems: 'center',
		marginBottom: 10,
	},
	buttonText: {
		color: 'darkblue',
		fontSize: 16,
	},
	footerContainer: {
		// Puedes añadir estilos si es necesario
	},
});

export default Home;
