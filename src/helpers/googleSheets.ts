// src/helpers/googleSheets.ts
import axios from 'axios';
import {
	GOOGLE_SHEETS_API_KEY,
	SPREADSHEET_ID,
	RANGE,
} from '../config/googleSheetsConfig';

export async function getAllRows() {
	const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${GOOGLE_SHEETS_API_KEY}`;
	const response = await axios.get(url);
	return response.data.values;
}

// Ajustamos la firma de la función
// Podemos recibir: dni?, name?, entryNumber?
export async function findPerson({
	dni,
	name,
	entryNumber,
}: {
	dni?: string;
	name?: string;
	entryNumber?: string;
}) {
	const rows = await getAllRows();
	if (!rows || rows.length < 2) return [];

	const header = rows[0];
	const dniIndex = header.indexOf('DNI');
	const nombreIndex = header.indexOf('NOMBRE');
	const apellidoIndex = header.indexOf('APELLIDO');
	const entradaIndex = header.indexOf('NUMERO_ENTRADA');

	// Convertimos todas las filas en un objeto con rowNumber para fácil acceso
	const dataRows = rows
		.slice(1)
		.map((r: any, i: number) => ({ rowNumber: i + 2, data: r }));

	// Búsqueda por DNI
	if (dni && dniIndex !== -1) {
		const found = dataRows.filter(
			(item: { data: { [x: string]: string } }) => item.data[dniIndex] === dni,
		);
		return found; // array, puede ser 0 o 1 normalmente.
	}

	// Búsqueda por Número de Entrada
	if (entryNumber && entradaIndex !== -1) {
		const found = dataRows.filter(
			(item: { data: { [x: string]: string } }) =>
				item.data[entradaIndex] === entryNumber,
		);
		return found;
	}

	// Búsqueda por Nombre (asumimos que el usuario ingresa un nombre o parte del nombre)
	// Podríamos suponer que "name" es sólo el nombre de pila, y queremos todos los que tengan ese nombre
	// en la columna NOMBRE o APELLIDO. O si name incluye espacio, es Nombre y Apellido.

	if (name && nombreIndex !== -1 && apellidoIndex !== -1) {
		const nameParts = name.toLowerCase().split(' ').filter(Boolean);
		// Devolver todos los que coincidan al menos con el primer nombre o apellido
		const found = dataRows.filter((item: { data: { [x: string]: string } }) => {
			const n = item.data[nombreIndex]?.toLowerCase() || '';
			const a = item.data[apellidoIndex]?.toLowerCase() || '';
			// Verificamos si alguno de los nameParts aparece en n o a
			return nameParts.some((part) => n.includes(part) || a.includes(part));
		});
		return found;
	}

	return [];
}

export async function markAttendance(rowNumber: number) {
	const updateRange = `Hoja1!E${rowNumber}`;
	const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${updateRange}?key=${GOOGLE_SHEETS_API_KEY}&valueInputOption=USER_ENTERED`;
	const body = {
		values: [['Ingresó']],
	};
	await axios.put(url, body);
}
