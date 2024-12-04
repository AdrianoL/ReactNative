// src/screens/link.tsx

import React, { useState } from 'react';
import {
	Text,
	Button,
	SafeAreaView,
	Image,
	View,
	StyleSheet,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { launchCamera } from 'react-native-image-picker';
import FooterList from '../components/footer/FooterList';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Links: React.FC = () => {
	const [hasPermission, setHasPermission] = useState(true);
	const [scanned, setScanned] = useState(false);
	const [showScanner, setShowScanner] = useState(false);
	const [data, setData] = useState<string | null>(null);
	const [image, setImage] = useState<string | null>(null);
	const [ocrResult, setOcrResult] = useState('');

	const user = useSelector((state: RootState) => state.auth.user);

	const pickImage = async () => {
		const result = await launchCamera({
			mediaType: 'photo',
			includeBase64: false,
			saveToPhotos: true,
		});

		if (result.didCancel || result.errorCode) {
			return;
		}

		if (result.assets && result.assets.length > 0) {
			setImage(result.assets[0].uri || null);
		}
	};

	const handleBarCodeScanned = ({ data }: { data: string }) => {
		setScanned(true);
		setData(data);
		setShowScanner(false);
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			{showScanner ? (
				<RNCamera
					style={{ flex: 1 }}
					onBarCodeRead={scanned ? undefined : handleBarCodeScanned}
					captureAudio={false}
				/>
			) : (
				<View style={styles.container}>
					<Text style={styles.text}>
						Datos escaneados: {data ? data : 'No hay datos escaneados'}
					</Text>
					<Button
						title="Escanear Código QR"
						onPress={() => setShowScanner(true)}
					/>
					<Button title="Capturar Imagen" onPress={pickImage} />
					{image && (
						<Image
							source={{ uri: image }}
							style={{ width: 200, height: 200 }}
						/>
					)}
					<Text>Resultado OCR: {ocrResult}</Text>
				</View>
			)}
			<FooterList />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 16,
	},
	text: {
		fontSize: 20,
		textAlign: 'center',
		marginVertical: 16,
	},
});

export default Links;
