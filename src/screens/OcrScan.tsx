// src/screens/OcrScan.tsx
import React, { useState } from 'react';
import {
	Text,
	TouchableOpacity,
	Alert,
	ActivityIndicator,
	SafeAreaView,
} from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import TextRecognition from 'react-native-text-recognition';
import { commonStyles } from './StylesCommon';
import { parseDniData } from '../helpers/parseDni';
import { findPerson } from '../helpers/googleSheets';
import { useNavigation } from '@react-navigation/native';

const OcrScan: React.FC = () => {
	const navigation = useNavigation();
	const [loading, setLoading] = useState(false);

	const handleScan = async () => {
		const result = await launchCamera({
			mediaType: 'photo',
			includeBase64: false,
			saveToPhotos: true,
		});

		if (result.didCancel || result.errorCode) {
			Alert.alert('Error', 'No se tomó ninguna foto.');
			return;
		}

		if (result.assets && result.assets.length > 0) {
			setLoading(true);
			try {
				const uri = result.assets[0].uri!;
				const ocrResult = await TextRecognition.recognize(uri);
				const { dni, nombreCompleto } = parseDniData(ocrResult);

				if (!dni && !nombreCompleto) {
					Alert.alert(
						'OCR Falló',
						'No se pudo extraer la información. Pruebe con búsqueda manual.',
					);
					navigation.navigate('ManualSearch' as never);
					return;
				}

				// Buscamos por dni o por nombre
				const results = await findPerson({ dni, name: nombreCompleto });
				if (results.length > 0) {
					// Navegamos a Result pasando el array completo
					navigation.navigate('Result' as never, { results });
				} else {
					Alert.alert(
						'No encontrado',
						'No se encontró la persona. Pruebe búsqueda manual.',
					);
					navigation.navigate('ManualSearch' as never);
				}
			} catch (e: any) {
				console.error(e);
				Alert.alert('Error', 'Ocurrió un error con el OCR o búsqueda.');
			} finally {
				setLoading(false);
			}
		}
	};

	return (
		<SafeAreaView style={commonStyles.container}>
			{loading ? (
				<ActivityIndicator size="large" />
			) : (
				<>
					<Text style={{ fontSize: 18, marginBottom: 20 }}>Escanear DNI</Text>
					<TouchableOpacity style={commonStyles.button} onPress={handleScan}>
						<Text style={commonStyles.buttonText}>Tomar Foto</Text>
					</TouchableOpacity>
				</>
			)}
		</SafeAreaView>
	);
};

export default OcrScan;
