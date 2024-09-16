import {
	StyleSheet,
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/auth';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { launchImageLibrary } from 'react-native-image-picker';

const Account = ({ navigation }) => {
	const [firstname, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState('');
	const [image, setImage] = useState({ url: '', public_id: '' });
	const [User, setUser] = useContext(AuthContext);
	const [uploadImage, setUploadImage] = useState('');

	useEffect(() => {
		if (User) {
			const { firstname, email, image } = User;
			setName(firstname);
			setEmail(email);
			setImage(image);
		}
	}, [User]);

	const handleSubmit = async () => {
		if (email === '' || password === '') {
			alert('All fields are required');
			return;
		}
		const resp = await axios.post('http://localhost:3000/auth/user', {
			email,
			password,
		});
		if (resp.data.error) {
			alert(resp.data.error);
		} else {
			setUser(resp.data);
			await AsyncStorage.setItem('auth-rn', JSON.stringify(resp.data));
			alert('Sign In Successful');
			navigation.navigate('Home');
		}
	};

	const handleUpload = async () => {
		const options = {
			mediaType: 'photo',
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
				uri: uri,
				type: 'image/jpeg/jpg',
				name: result.assets[0].fileName,
			});

			setImage(uri);

			try {
				const { data } = await axios.post(
					'http://localhost:3000/upload/uploadfile',
					formData,
					{
						headers: { 'Content-Type': 'multipart/form-data' },
					},
				);
				console.log('Upload successful', data);
			} catch (error) {
				console.log('Upload error', error);
			}
		}
	};

	if (!User) {
		return <Text>Loading...</Text>;
	}

	return (
		<KeyboardAwareScrollView contentContainerStyle={styles.container}>
			<View style={{ marginVertical: 100 }}>
				<View style={styles.imageContainer}>
					{image && image.url ? (
						<Image source={{ uri: image.url }} style={styles.imageStyles} />
					) : uploadImage ? (
						<Image source={{ uri: uploadImage }} style={styles.imageStyles} />
					) : (
						<TouchableOpacity onPress={handleUpload}>
							<FontAwesome5 name="camera" size={25} color="darkmagenta" />
						</TouchableOpacity>
					)}
				</View>
				{image && image.url ? (
					<TouchableOpacity onPress={handleUpload}>
						<FontAwesome5
							name="camera"
							size={25}
							color="darkmagenta"
							style={styles.iconStyle}
						/>
					</TouchableOpacity>
				) : (
					<></>
				)}
				<Text style={styles.signupText}>
					{User.lastname + ', ' + User.firstname}
				</Text>
				<Text style={styles.emailText}>{User.email}</Text>
				<Text style={styles.roleText}>{User.address}</Text>
				<View style={{ marginHorizontal: 24 }}>
					<Text style={{ fontSize: 16, color: '#8e93a1' }}>CONTRASEÑA</Text>
					<TextInput
						style={styles.signupInput}
						value={password}
						onChangeText={(text) => setPassword(text)}
						secureTextEntry={true}
						autoCompleteType="password"
					/>
				</View>
				<TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle}>
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
	signupInput: {
		borderBottomWidth: 0.5,
		height: 48,
		borderBottomColor: '#8e93a1',
		marginBottom: 30,
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
	},
});

export default Account;
