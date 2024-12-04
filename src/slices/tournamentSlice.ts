// src/slices/tournamentSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Tournament } from '../models/Tournament';
import * as tournamentService from '../services/tournamentService';

interface TournamentState {
	tournaments: Tournament[];
	loading: boolean;
	error: string | null;
}

const initialState: TournamentState = {
	tournaments: [],
	loading: false,
	error: null,
};

export const fetchTournaments = createAsyncThunk(
	'tournaments/fetchTournaments',
	async () => {
		return await tournamentService.getTournaments();
	},
);

const tournamentSlice = createSlice({
	name: 'tournaments',
	initialState,
	reducers: {
		// Puedes agregar reducers sincrónicos aquí
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTournaments.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				fetchTournaments.fulfilled,
				(state, action: PayloadAction<Tournament[]>) => {
					state.loading = false;
					state.tournaments = action.payload;
				},
			)
			.addCase(fetchTournaments.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Error al cargar torneos';
			});
	},
});

export default tournamentSlice.reducer;
