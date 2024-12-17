// src/screens/ManualSearch.tsx
import React, { useState } from 'react';
import {
	Text,
	TextInput,
	TouchableOpacity,
	Alert,
	SafeAreaView,
} from 'react-native';
import { commonStyles } from './StylesCommon';
import { findPerson } from '../helpers/googleSheets';
import { useNavigation } from '@react-navigation/native';

const ManualSearch: React.FC = () => {
	const [dni, setDni] = useState('');
	const [name, setName] = useState('');
	const [entryNumber, setEntryNumber] = useState('');
	const navigation = useNavigation();

	const handleSearch = async () => {
		if (!dni && !name && !entryNumber) {
			Alert.alert('Error', 'Ingrese DNI, Nombre o Número de Entrada');
			return;
		}

		try {
			const results = await findPerson({ dni, name, entryNumber });
			if (results.length > 0) {
				navigation.navigate('Result' as never, { results });
			} else {
				Alert.alert('No encontrado', 'No se encontró la persona en la hoja.');
			}
		} catch (e: any) {
			console.error(e);
			Alert.alert('Error', 'Ocurrió un error al buscar.');
		}
	};

	return (
		<SafeAreaView style={commonStyles.container}>
			<Text style={{ fontSize: 18, marginBottom: 20 }}>Búsqueda Manual</Text>
			<TextInput
				style={commonStyles.input}
				placeholder="Ingrese DNI (opcional)"
				value={dni}
				onChangeText={setDni}
				keyboardType="numeric"
			/>
			<TextInput
				style={commonStyles.input}
				placeholder="Ingrese Nombre (opcional)"
				value={name}
				onChangeText={setName}
			/>
			<TextInput
				style={commonStyles.input}
				placeholder="Número de Entrada (opcional)"
				value={entryNumber}
				onChangeText={setEntryNumber}
				keyboardType="numeric"
			/>
			<TouchableOpacity style={commonStyles.button} onPress={handleSearch}>
				<Text style={commonStyles.buttonText}>Buscar</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default ManualSearch;
