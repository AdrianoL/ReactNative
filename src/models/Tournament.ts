// src/models/Tournament.ts
export interface Tournament {
	_id: string;
	name: string;
	location: string;
	startDate: string;
	endDate: string;
	teams: string[]; // IDs de equipos
	// Agrega más campos según tu API
}
