import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions'; // Importa react-native-permissions
import { useNavigation, useRoute } from '@react-navigation/native';

import FooterItem from './FooterItem';

const requestAudioPermission = async () => {
	if (Platform.OS === 'android') {
		// Solicitar permisos para Android
		const result = await request(PERMISSIONS.ANDROID.RECORD_AUDIO);
		if (result === RESULTS.GRANTED) {
			console.log('Permission granted for Android');
			return true;
		} else {
			console.log('Permission denied for Android');
			return false;
		}
	} else if (Platform.OS === 'ios') {
		// Verificar permisos para iOS
		const result = await check(PERMISSIONS.IOS.MICROPHONE);
		if (result === RESULTS.GRANTED) {
			console.log('Permission already granted for iOS');
			return true;
		} else if (result === RESULTS.DENIED) {
			const requestResult = await request(PERMISSIONS.IOS.MICROPHONE);
			if (requestResult === RESULTS.GRANTED) {
				console.log('Permission granted after request for iOS');
				return true;
			} else {
				console.log('Permission denied for iOS');
				return false;
			}
		} else {
			console.log('Permission denied or restricted for iOS');
			return false;
		}
	}
};

const FooterList = () => {
	const navigation = useNavigation();
	const route = useRoute();

	const audioRecorderPlayer = useRef(new AudioRecorderPlayer()); // Usamos useRef para mantener una instancia persistente
	const [isRecording, setIsRecording] = useState(false);

	useEffect(() => {
		// Solicitar permisos al cargar el componente
		requestAudioPermission();
	}, []);

	const handleStartRecording = async () => {
		const hasPermission = await requestAudioPermission();
		if (hasPermission && !isRecording) {
			try {
				console.log('Starting recording...');
				const result = await audioRecorderPlayer.current.startRecorder();
				audioRecorderPlayer.current.addRecordBackListener((e) => {
					console.log('Recording', e.current_position);
				});
				setIsRecording(true);
				console.log(result);
			} catch (error) {
				console.error('Failed to start recording', error);
			}
		} else {
			console.error('Permission denied or already recording');
		}
	};

	const handleStopRecording = async () => {
		if (isRecording) {
			try {
				console.log('Stopping recording...');
				const result = await audioRecorderPlayer.current.stopRecorder();
				audioRecorderPlayer.current.removeRecordBackListener();
				setIsRecording(false);
				console.log(result);
			} catch (error) {
				console.error('Failed to stop recording', error);
			}
		} else {
			console.error('Was not recording');
		}
	};

	return (
		<View style={styles.footerContainer}>
			<FooterItem
				text="Home"
				name="home"
				screenName="Home"
				handlePress={() => navigation.navigate('Home')}
				routeName={route.name}
			/>
			<FooterItem
				text="Post"
				name="plus-square"
				screenName="Post"
				handlePress={() => navigation.navigate('Post')}
				routeName={route.name}
			/>
			<FooterItem
				text="Links"
				name="list-ol"
				screenName="Links"
				handlePress={() => navigation.navigate('Links')}
				routeName={route.name}
			/>
			<FooterItem
				text="Account"
				name="user"
				screenName="Account"
				handlePress={() => navigation.navigate('Account')}
				routeName={route.name}
			/>
			<TouchableOpacity style={styles.button}>
				<FontAwesome5 name="home" size={20} color="#000" />
			</TouchableOpacity>

			<TouchableOpacity
				style={[styles.button, styles.middleButton]}
				onPressIn={handleStartRecording}
				onPressOut={handleStopRecording}
			>
				<FontAwesome5 name="microphone" size={25} color="#fff" />
			</TouchableOpacity>

			<TouchableOpacity style={styles.button}>
				<FontAwesome5 name="user" size={20} color="#000" />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	footerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		backgroundColor: '#eee',
	},
	button: {
		flex: 1,
		alignItems: 'center',
		padding: 10,
	},
	middleButton: {
		backgroundColor: 'darkgreen',
		borderRadius: 30,
		padding: 15,
		marginHorizontal: 20,
	},
});

export default FooterList;
