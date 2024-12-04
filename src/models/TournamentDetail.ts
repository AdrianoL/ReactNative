// src/models/TournamentDetail.ts
export interface TournamentDetail {
	_id: string;
	name: string;
	location: string;
	startDate: string;
	endDate: string;
	teams: string[]; // IDs de equipos
	// Agrega más campos según tu API
}
