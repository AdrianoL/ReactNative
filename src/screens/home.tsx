// src/screens/Home.tsx

import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Alert,
	ActivityIndicator,
	Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { clearUser } from '../slices/authSlice';
import { API_ROUTES } from '../config/apiRoutes';
import axios from 'axios';
import { setUserProfile } from '../slices/userSlice';
import FooterList from '../components/footer/FooterList';
import HeaderTabs from '../components/header/HeaderTabs';

const Home: React.FC = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch<AppDispatch>();
	const user = useSelector((state: RootState) => state.auth.user);
	const [processing, setProcessing] = useState(false);
	const [isCheckinDisabled, setIsCheckinDisabled] = useState(false);
	const [isGateDisabled, setIsGateDisabled] = useState(false);
	const [isCompensationDisabled, setIsCompensationDisabled] = useState(false);

	useEffect(() => {
		// Obtener privilegios y perfil del usuario
		fetchUserProfile();
	}, []);

	const fetchUserProfile = async () => {
		setProcessing(true);
		try {
			const response = await axios.get(API_ROUTES.PROFILE, {
				headers: {
					Authorization: `Bearer ${user?.access_token}`,
				},
			});
			const profileData = response.data;

			dispatch(setUserProfile(profileData));

			// Establecer privilegios
			const privileges = profileData.Privileges || [];
			setIsCheckinDisabled(privileges.includes('AccessCheckinWorkflow'));
			setIsGateDisabled(privileges.includes('AccessGateWorkflow'));
			setIsCompensationDisabled(
				privileges.some((privilege: string) =>
					[
						'IssueLowerCompensationAirport',
						'IssueHigherCompensationAirport',
						'IssueLowerCompensationCustomerCare',
						'IssueMediumCompensationCustomerCare',
						'IssueHigherCompensationCustomerCare',
					].includes(privilege),
				),
			);
		} catch (error) {
			console.error(error);
			Alert.alert('Error', 'No se pudo obtener el perfil del usuario.');
		} finally {
			setProcessing(false);
		}
	};

	const navigateToCheckIn = () => {
		if (!isCheckinDisabled) {
			navigation.navigate('CheckIn');
		} else {
			Alert.alert(
				'Acceso Denegado',
				'No tienes permiso para acceder a Check In.',
			);
		}
	};

	const navigateToDepartures = () => {
		if (isGateDisabled) {
			navigation.navigate('Departures');
		} else {
			Alert.alert(
				'Acceso Denegado',
				'No tienes permiso para acceder a Departures.',
			);
		}
	};

	const navigateToCompensation = () => {
		if (isCompensationDisabled) {
			navigation.navigate('Compensation');
		} else {
			Alert.alert(
				'Acceso Denegado',
				'No tienes permiso para acceder a Compensation.',
			);
		}
	};

	const navigateToSettings = () => {
		navigation.navigate('Settings');
	};

	return (
		<View style={styles.container}>
			<HeaderTabs />
			<ScrollView style={styles.body}>
				<View style={styles.cardMenu}>
					<TouchableOpacity
						style={styles.cardMenuItem}
						onPress={navigateToCheckIn}
					>
						<Text
							style={[
								styles.icon,
								{ color: isCheckinDisabled ? '#2260A4' : 'lightgray' },
							]}
						>
							{/* Icono de Check In */}
							🛂
						</Text>
						<Text
							style={[
								styles.cardMenuTitle,
								{ color: isCheckinDisabled ? '#2260A4' : 'lightgray' },
							]}
						>
							Check In
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.cardMenuItem}
						onPress={navigateToDepartures}
					>
						<Text
							style={[
								styles.icon,
								{ color: isGateDisabled ? '#2260A4' : 'lightgray' },
							]}
						>
							{/* Icono de Departures */}
							✈️
						</Text>
						<Text
							style={[
								styles.cardMenuTitle,
								{ color: isGateDisabled ? '#2260A4' : 'lightgray' },
							]}
						>
							Departures
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.cardMenuItem}
						onPress={navigateToCompensation}
					>
						<Text
							style={[
								styles.icon,
								{ color: isCompensationDisabled ? '#2260A4' : 'lightgray' },
							]}
						>
							{/* Icono de Compensation */}
							💰
						</Text>
						<Text
							style={[
								styles.cardMenuTitle,
								{ color: isCompensationDisabled ? '#2260A4' : 'lightgray' },
							]}
						>
							Compensation
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
			<FooterList />
			{processing && (
				<View style={styles.loading}>
					<ActivityIndicator size="large" color="#2260A4" />
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#DBDAD8', // RGB(219,218,216)
	},
	body: {
		flex: 1,
	},
	cardMenu: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 10,
	},
	cardMenuItem: {
		backgroundColor: 'rgba(255, 255, 255, 0.75)',
		padding: 10,
		alignItems: 'center',
		flex: 1,
		margin: 5,
		borderRadius: 5,
	},
	icon: {
		fontSize: 40,
		marginBottom: 10,
	},
	cardMenuTitle: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	loading: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		backgroundColor: 'rgba(0,0,0,0.3)',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Home;
