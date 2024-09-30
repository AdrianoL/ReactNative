import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	Alert,
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { launchImageLibrary } from 'react-native-image-picker';
import MaterialTextInput from '../components/utils/MaterialTextInput';

const Account: React.FC = ({ navigation }) => {
	const user = useSelector((state: RootState) => state.auth.user);
	const [currentPassword, setCurrentPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [imageUri, setImageUri] = useState<string | null>(null);

	useEffect(() => {
		if (user?.image?.url) {
			setImageUri(user.image.url);
		}
	}, [user]);

	const handleUpdatePassword = async () => {
		if (newPassword !== confirmPassword) {
			Alert.alert('Error', 'Las contraseñas no coinciden.');
			return;
		}
		try {
			const response = await axios.post('/auth/update-password', {
				currentPassword,
				newPassword,
			});
			Alert.alert('Éxito', 'Contraseña actualizada correctamente.');
		} catch (error) {
			Alert.alert('Error', 'No se pudo actualizar la contraseña.');
		}
	};

	const handleUpload = async () => {
		const options = {
			mediaType: 'photo' as const,
			includeBase64: false,
		};

		const result = await launchImageLibrary(options);

		if (result.didCancel || result.errorCode) {
			return;
		}

		if (result.assets && result.assets.length > 0) {
			const uri = result.assets[0].uri;

			let formData = new FormData();
			formData.append('myFile', {
				uri: uri!,
				type: 'image/jpeg',
				name: result.assets[0].fileName!,
			});

			try {
				const { data } = await axios.post('/upload/uploadfile', formData, {
					headers: { 'Content-Type': 'multipart/form-data' },
				});
				setImageUri(data.url);
				setUser({ ...user!, image: data });
				await EncryptedStorage.setItem(
					'auth-rn',
					JSON.stringify({ ...user!, image: data }),
				);
				Alert.alert('Éxito', 'Imagen actualizada correctamente.');
			} catch (error) {
				Alert.alert('Error', 'No se pudo subir la imagen.');
			}
		}
	};

	if (!user) {
		return <Text>Loading...</Text>;
	}

	return (
		<KeyboardAwareScrollView contentContainerStyle={styles.container}>
			<View style={{ marginVertical: 100 }}>
				<View style={styles.imageContainer}>
					{imageUri ? (
						<Image source={{ uri: imageUri }} style={styles.imageStyles} />
					) : (
						<TouchableOpacity onPress={handleUpload}>
							<FontAwesome5 name="camera" size={25} color="darkmagenta" />
						</TouchableOpacity>
					)}
				</View>
				<TouchableOpacity onPress={handleUpload}>
					<FontAwesome5
						name="camera"
						size={25}
						color="darkmagenta"
						style={styles.iconStyle}
					/>
				</TouchableOpacity>
				<Text style={styles.signupText}>
					{user.lastname}, {user.firstname}
				</Text>
				<Text style={styles.emailText}>{user.email}</Text>
				<Text style={styles.roleText}>{user.address}</Text>
				<View style={{ marginHorizontal: 24 }}>
					<MaterialTextInput
						label="Contraseña Actual"
						value={currentPassword}
						onChangeText={setCurrentPassword}
						secureTextEntry
					/>
					<MaterialTextInput
						label="Nueva Contraseña"
						value={newPassword}
						onChangeText={setNewPassword}
						secureTextEntry
					/>
					<MaterialTextInput
						label="Confirmar Nueva Contraseña"
						value={confirmPassword}
						onChangeText={setConfirmPassword}
						secureTextEntry
					/>
				</View>
				<TouchableOpacity
					onPress={handleUpdatePassword}
					style={styles.buttonStyle}
				>
					<Text style={styles.buttonText}>Actualizar Contraseña</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAwareScrollView>
	);
};

const styles = StyleSheet.create({
	iconStyle: {
		marginTop: -5,
		marginBottom: 10,
		alignSelf: 'center',
	},
	container: {
		flex: 1,
		justifyContent: 'space-between',
	},
	signupText: {
		fontSize: 30,
		textAlign: 'center',
		paddingBottom: 10,
	},
	emailText: {
		fontSize: 18,
		textAlign: 'center',
		paddingBottom: 10,
	},
	roleText: {
		fontSize: 16,
		textAlign: 'center',
		paddingBottom: 10,
		color: 'gray',
	},
	buttonStyle: {
		backgroundColor: 'darkmagenta',
		height: 50,
		marginBottom: 20,
		justifyContent: 'center',
		marginHorizontal: 15,
		borderRadius: 15,
	},
	buttonText: {
		fontSize: 20,
		textAlign: 'center',
		color: '#FFF',
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
	imageContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageStyles: {
		width: 100,
		height: 100,
		marginVertical: 20,
		borderRadius: 50,
	},
});

export default Account;
