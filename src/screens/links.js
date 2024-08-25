import React, { useState, useEffect, useContext } from 'react';
import { Text, Button, SafeAreaView, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { launchCamera } from 'react-native-image-picker';
import FooterList from '../components/footer/FooterList';
import { AuthContext } from '../context/auth';

const Links = () => {
	const [hasPermission, setHasPermission] = useState(true); // Asume que se tiene permiso
	const [scanned, setScanned] = useState(false);
	const [showScanner, setShowScanner] = useState(false);
	const [data, setData] = useState(null); // Almacena los datos escaneados
	const [User, setUser] = useContext(AuthContext);
	const [image, setImage] = useState(null);
	const [ocrResult, setOcrResult] = useState('');

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
			setImage(result.assets[0].uri);
		}
	};

	const handleBarCodeScanned = ({ data }) => {
		setScanned(true);
		setData(data);
		setShowScanner(false); // Ocultar el escáner después de escanear
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
				<>
					<Text style={{ fontSize: 20, textAlign: 'center' }}>
						Datos escaneados: {data ? data : 'No hay datos escaneados'}
					</Text>
					<Button
						title={'Escanear Código QR'}
						onPress={() => setShowScanner(true)}
					/>
					<Button title={'Capturar Imagen'} onPress={pickImage} />
					{image && (
						<Image
							source={{ uri: image }}
							style={{ width: 200, height: 200 }}
						/>
					)}
					<Text>Resultado OCR: {ocrResult}</Text>
				</>
			)}
			<FooterList />
		</SafeAreaView>
	);
};

export default Links;
