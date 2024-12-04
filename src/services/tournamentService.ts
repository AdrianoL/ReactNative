// src/services/tournamentService.ts
import axios from 'axios';
import { API_ROUTES } from '../config/apiRoutes';
import { Tournament } from '../models/Tournament';

export const getTournaments = async (): Promise<Tournament[]> => {
	const response = await axios.get(API_ROUTES.TOURNAMENTS.GET_ALL);
	return response.data;
};

export const createTournament = async (data: any): Promise<Tournament> => {
	const response = await axios.post(API_ROUTES.TOURNAMENTS.CREATE, data);
	return response.data;
};

// Agrega más funciones para actualizar, eliminar, etc.
