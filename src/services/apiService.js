// src/services/apiService.js
import axios from 'axios';
import { API_ROUTES } from '../config/apiRoutes';

export const authService = {
	login: (credentials) => axios.post(API_ROUTES.AUTH.LOGIN, credentials),
	register: (data) => axios.post(API_ROUTES.AUTH.REGISTER, data),
	// ...otros métodos de autenticación
};

export const fieldService = {
	getAll: () => axios.get(API_ROUTES.FIELDS.GET_ALL),
	getById: (id) => axios.get(API_ROUTES.FIELDS.GET_BY_ID(id)),
	bookField: (id, data) => axios.post(API_ROUTES.FIELDS.BOOK(id), data),
	// ...otros métodos relacionados con canchas
};

// Crea servicios similares para equipos, jugadores, pagos, reseñas, etc.
