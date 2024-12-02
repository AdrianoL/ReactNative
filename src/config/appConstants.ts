export const API_ROUTES = {
	CHECKIN: '/api/checkin/',
	EMDS: '/api/emds/',
	FLIGHTS: '/api/flights/',
	ORDERS: '/api/orders/',
	BAGGAGE: '/api/baggage/catalog/',
	PRICE: '/api/baggage/price',
	GET_PASSENGER: '/api/orders',
	GET_REQUIRED_DOCS: '/api/orders',
	VALIDATE_PASSENGER: '/api/orders',
	ADD_PASSENGER: '/api/orders',
	PROFILE: '/api/account/profile',
	COUNTRIES: '/api/countries',
	CITIES: '/api/cities/',
	SEATMAP: '/api/flights/',
	ASSIGN_SEAT: '/api/seats/assign',
	OFFLOAD: '/api/checkin/offload',
	BAGTAG: '/api/checkin/tags/manualbagtag',
	FQTV: '/api/reference?get=fqtv',
	PRINTER_DEVICE: '/api/delivery/printers/',
	HOST_PRINTER: '/api/delivery/',
	REMARKS: '/api/checkin/tags/bagtagprintaction',
	REMARKS_CHECKIN: '/api/checkin/tags/checkinbagtagprint',
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
