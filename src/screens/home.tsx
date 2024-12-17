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
	SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { clearUser } from '../slices/authSlice';
import { API_ROUTES } from '../config/apiRoutes';
import { fetch } from 'react-native-ssl-pinning';
import axios from 'axios';
import { setUserProfile } from '../slices/userSlice';
import FooterList from '../components/footer/FooterList';
import HeaderTabs from '../components/header/HeaderTabs';

import { commonStyles } from './StylesCommon';

const Home: React.FC = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch<AppDispatch>();
	const user = useSelector((state: RootState) => state.auth.user);
	const [processing, setProcessing] = useState(false);

	useEffect(() => {
		// Obtener privilegios y perfil del usuario
		fetchUserProfile();
	}, []);

	const fetchUserProfile = async () => {
		setProcessing(true);
		try {
			const response = await fetch(API_ROUTES.AUTH.USER_PROFILE, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${user?.accessToken}`,
					// 'Content-Type': 'application/x-www-form-urlencoded',
				},
				disableAllSecurity: true,
			});
			// const response = await axios.get(API_ROUTES.USERS.GET_PROFILE, {
			// 	headers: {
			// 		Authorization: `Bearer ${user?.accessToken}`,
			// 	},
			// });
			const profileData = response.data;

			dispatch(setUserProfile(profileData));
		} catch (error) {
			console.error(error);
			Alert.alert('Error', 'No se pudo obtener el perfil del usuario.');
		} finally {
			setProcessing(false);
		}
	};

	return (
		<>
			<SafeAreaView style={commonStyles.container}>
				<Text style={{ fontSize: 20, marginBottom: 20, fontWeight: 'bold' }}>
					Bienvenido
				</Text>
				<TouchableOpacity
					style={commonStyles.button}
					onPress={() => navigation.navigate('OcrScan' as never)}
				>
					<Text style={commonStyles.buttonText}>Escanear DNI</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={commonStyles.button}
					onPress={() => navigation.navigate('ManualSearch' as never)}
				>
					<Text style={commonStyles.buttonText}>Búsqueda Manual</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</>
		// <View style={styles.container}>
		// 	<HeaderTabs />
		// 	<ScrollView style={styles.body}>
		// 		<View style={styles.cardMenu}>
		// 			<Text style={[styles.icon, { color: '#2260A4' }]}>
		// 				{/* Icono de Check In */}
		// 				🛂
		// 			</Text>
		// 			<Text style={[styles.cardMenuTitle, { color: '#2260A4' }]}>
		// 				Check In
		// 			</Text>
		// 		</View>
		// 	</ScrollView>
		// 	<FooterList />
		// 	{processing && (
		// 		<View style={styles.loading}>
		// 			<ActivityIndicator size="large" color="#2260A4" />
		// 		</View>
		// 	)}
		// </View>
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
