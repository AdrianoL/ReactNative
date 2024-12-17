// src/screens/Result.tsx
import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Alert,
	SafeAreaView,
	FlatList,
} from 'react-native';
import { commonStyles } from './StylesCommon';
import { markAttendance } from '../helpers/googleSheets';
import { useRoute } from '@react-navigation/native';

// Ajustamos el type ya que ahora recibimos { results: {rowNumber:number; data:string[]}[] }
type ResultRouteParams = {
	params: {
		results: {
			rowNumber: number;
			data: string[];
		}[];
	};
};

const Result: React.FC = () => {
	const route = useRoute() as ResultRouteParams;
	const { results } = route.params;

	const handleMark = async (rowNumber: number) => {
		try {
			await markAttendance(rowNumber);
			Alert.alert('Éxito', 'Ingreso marcado correctamente.');
		} catch (e: any) {
			console.error(e);
			Alert.alert('Error', 'No se pudo marcar el ingreso.');
		}
	};

	// Asumimos columnas: A: DNI, B: NOMBRE, C: APELLIDO, D: NUMERO_ENTRADA
	const renderItem = ({
		item,
	}: {
		item: { rowNumber: number; data: string[] };
	}) => {
		const [dni, nombre, apellido, entrada] = item.data;
		return (
			<View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
				<Text>DNI: {dni}</Text>
				<Text>Nombre: {nombre}</Text>
				<Text>Apellido: {apellido}</Text>
				<Text>Entrada: {entrada}</Text>
				<TouchableOpacity
					style={commonStyles.button}
					onPress={() => handleMark(item.rowNumber)}
				>
					<Text style={commonStyles.buttonText}>Marcar Ingreso</Text>
				</TouchableOpacity>
			</View>
		);
	};

	return (
		<SafeAreaView style={commonStyles.container}>
			<Text style={{ fontSize: 18, marginBottom: 10 }}>
				Resultados Encontrados:
			</Text>
			{results.length === 0 ? (
				<Text>No se encontraron personas</Text>
			) : (
				<FlatList
					data={results}
					keyExtractor={(_item, index) => String(index)}
					renderItem={renderItem}
				/>
			)}
		</SafeAreaView>
	);
};

export default Result;
