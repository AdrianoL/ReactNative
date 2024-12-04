// src/config/apiRoutes.ts
const BASE_URL = 'http://localhost:3000';

export const API_ROUTES = {
	LOGIN: `${BASE_URL}/auth/login`,
	REGISTER: `${BASE_URL}/auth/register`,
	PROFILE: `${BASE_URL}/auth/?id=5cc40ee3565fa71ae66d47dc`,
	UPLOAD_FILE: `${BASE_URL}/upload/uploadfile`,
	// Añade más rutas según sea necesario
};
