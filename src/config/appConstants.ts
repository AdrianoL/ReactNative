export const API_ROUTES = {
	PROFILE: '/api/account/profile',
	COUNTRIES: '/api/countries',
	CITIES: '/api/cities/',
	PRINTER_DEVICE: '/api/delivery/printers/',
	HOST_PRINTER: '/api/delivery/',
	COMPENSATION: '/api/', // Asegúrate de que este sea el endpoint correcto
};

export const HEADER_API_USER = 'your_api_user_key'; // Reemplaza con el valor real
export const FIELD_VALIDATION_TEXT = 'Mandatory fields should not be empty';
export const APIS_DATA_REQUIRED = 'APIS Data Required';

// Sugerencias y Modificaciones:
//- Usa variables de entorno para valores sensibles.
//- Asegúrate de que las rutas de la API sean correctas.

export default {
	API_ROUTES,
	HEADER_API_USER,
	FIELD_VALIDATION_TEXT,
	APIS_DATA_REQUIRED,
};
