// src/config/apiRoutes.js
const BASE_PROTOCOL = 'https://';
const BASE_URL = 'iduco.com';

export const API_ROUTES = {
	AUTH: {
		LOGIN: `${BASE_PROTOCOL}auth.${BASE_URL}/auth/login`,
		REGISTER: `${BASE_PROTOCOL}auth.${BASE_URL}/auth/register`,
		USER_PROFILE: `${BASE_PROTOCOL}auth.${BASE_URL}/api/me`,
		CHANGE_PASSWORD: `${BASE_PROTOCOL}auth.${BASE_URL}/api/change-password`,
	},
	USERS: {
		GET_PROFILE: `${BASE_PROTOCOL}users.${BASE_URL}/users/profile`,
		UPDATE_PROFILE: `${BASE_PROTOCOL}users.${BASE_URL}/users/profile`,
	},
	FIELDS: {
		GET_ALL: `${BASE_PROTOCOL}fields.${BASE_URL}/api/fields`,
		GET_BY_ID: (id: any) =>
			`${BASE_PROTOCOL}fields.${BASE_URL}/api/fields/${id}`,
		BOOK: (id: any) =>
			`${BASE_PROTOCOL}fields.${BASE_URL}/api/fields/${id}/book`,
		CANCEL_BOOKING: (fieldId: any, bookingId: any) =>
			`${BASE_PROTOCOL}fields.${BASE_URL}/api/fields/${fieldId}/bookings/${bookingId}`,
	},
	TEAMS: {
		GET_ALL: `${BASE_PROTOCOL}teams.${BASE_URL}/api/teams`,
		GET_BY_ID: (id: any) => `${BASE_PROTOCOL}teams.${BASE_URL}/api/teams/${id}`,
		CREATE: `${BASE_PROTOCOL}teams.${BASE_URL}/api/teams`,
		UPDATE: (id: any) => `${BASE_PROTOCOL}teams.${BASE_URL}/api/teams/${id}`,
		DELETE: (id: any) => `${BASE_PROTOCOL}teams.${BASE_URL}/api/teams/${id}`,
		GET_STATS: (id: any) =>
			`${BASE_PROTOCOL}teams.${BASE_URL}/api/teams/${id}/stats`,
		GET_PLAYERS: (id: any) =>
			`${BASE_PROTOCOL}teams.${BASE_URL}/api/teams/${id}/players`,
		ADD_PLAYER: (id: any) =>
			`${BASE_PROTOCOL}teams.${BASE_URL}/api/teams/${id}/players`,
	},
	PLAYERS: {
		GET_ALL: `${BASE_PROTOCOL}teams.${BASE_URL}/api/players`,
		GET_BY_ID: (id: any) =>
			`${BASE_PROTOCOL}teams.${BASE_URL}/api/players/${id}`,
		CREATE: `${BASE_PROTOCOL}teams.${BASE_URL}/api/players`,
		UPDATE: (id: any) => `${BASE_PROTOCOL}teams.${BASE_URL}/api/players/${id}`,
		DELETE: (id: any) => `${BASE_PROTOCOL}teams.${BASE_URL}/api/players/${id}`,
	},
	PAYMENTS: {
		INITIATE: `${BASE_PROTOCOL}payments.${BASE_URL}/api/payments`,
		GET_BY_ID: (id: any) =>
			`${BASE_PROTOCOL}payments.${BASE_URL}/api/payments/${id}`,
		WEBHOOK: `${BASE_PROTOCOL}payments.${BASE_URL}/api/payments/webhook`,
	},
	REVIEWS: {
		CREATE: `${BASE_PROTOCOL}reviews.${BASE_URL}/api/reviews`,
		GET_FOR_TARGET: (targetType: any, targetId: any) =>
			`${BASE_PROTOCOL}reviews.${BASE_URL}/api/reviews/${targetType}/${targetId}`,
	},
	// Añade más rutas según sea necesario
};
