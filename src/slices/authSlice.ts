import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
	access_token: string;
	email: string;
	firstname: string;
	lastname: string;
	// Otros campos según tu modelo
}

interface AuthState {
	user: User | null;
}

const initialState: AuthState = {
	user: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
		},
		clearUser: (state) => {
			state.user = null;
		},
	},
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
