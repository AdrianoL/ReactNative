// src/config/apiRoutes.ts
const BASE_URL = 'http://localhost:3000';

export const API_ROUTES = {
	LOGIN: `${BASE_URL}/auth/user`,
	REGISTER: `${BASE_URL}/auth/register`,
	UPLOAD_FILE: `${BASE_URL}/upload/uploadfile`,
	// Añade más rutas según sea necesario
};
