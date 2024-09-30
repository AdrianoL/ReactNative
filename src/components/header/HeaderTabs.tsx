import React from 'react';
import { TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../slices/authSlice';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EncryptedStorage from 'react-native-encrypted-storage';
import { AppDispatch } from '../../store';

const HeaderTabs: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();

	const signOut = async () => {
		dispatch(clearUser());
		await EncryptedStorage.removeItem('auth-rn');
		Alert.alert('Sesión cerrada', 'Has cerrado sesión correctamente.');
	};

	return (
		<SafeAreaView>
			<TouchableOpacity onPress={signOut}>
				<FontAwesome5 name="sign-out-alt" size={25} color="darkmagenta" />
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default HeaderTabs;
