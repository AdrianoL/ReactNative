// src/components/footer/FooterList.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, StyleSheet, Platform, Alert } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { useNavigation, useRoute } from '@react-navigation/native';

import FooterItem from './FooterItem';

const FooterList: React.FC = () => {
	const navigation = useNavigation();
	const route = useRoute();
	const audioRecorderPlayer = useRef(new AudioRecorderPlayer());
	const [isRecording, setIsRecording] = useState(false);

	useEffect(() => {
		requestAudioPermission();
	}, []);

	const requestAudioPermission = async () => {
		try {
			const permission =
				Platform.OS === 'android'
					? PERMISSIONS.ANDROID.RECORD_AUDIO
					: PERMISSIONS.IOS.MICROPHONE;

			const result = await request(permission);

			if (result === RESULTS.GRANTED) {
				console.log('Permission granted');
			} else {
				Alert.alert(
					'Permiso requerido',
					'Esta función requiere acceso al micrófono. Por favor, habilita el permiso en la configuración.',
					[{ text: 'OK' }],
				);
			}
		} catch (error) {
			console.error('Permission error:', error);
		}
	};

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

	const navigateTo = useCallback(
		(screenName: string) => () => navigation.navigate(screenName as never),
		[navigation],
	);

	return (
		<View style={styles.footerContainer}>
			<FooterItem
				text="Check In"
				name="home"
				screenName="Home"
				handlePress={navigateTo('Home')}
				routeName={route.name}
			/>
			<FooterItem
				text="Departures"
				name="plane-departure"
				screenName="Post"
				handlePress={navigateTo('Post')}
				routeName={route.name}
			/>
			<FooterItem
				text="Compensation"
				name="money-bill"
				screenName="Links"
				handlePress={navigateTo('Links')}
				routeName={route.name}
			/>
			<FooterItem
				text="Notification"
				name="bell"
				screenName="Notifications"
				handlePress={navigateTo('Notifications')}
				routeName={route.name}
			/>
			<FooterItem
				text="Settings"
				name="cog"
				screenName="Account"
				handlePress={navigateTo('Account')}
				routeName={route.name}
			/>
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
		color: 'blue',
	},
	middleButton: {
		backgroundColor: 'darkgreen',
		borderRadius: 30,
		padding: 15,
		marginHorizontal: 20,
	},
});

export default FooterList;
