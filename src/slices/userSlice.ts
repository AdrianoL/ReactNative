// src/slices/userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserProfile {
	Username: string;
	Privileges: string[];
}

interface UserState {
	profile: UserProfile | null;
}

const initialState: UserState = {
	profile: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserProfile: (state, action: PayloadAction<UserProfile>) => {
			state.profile = action.payload;
		},
		clearUserProfile: (state) => {
			state.profile = null;
		},
	},
});

export const { setUserProfile, clearUserProfile } = userSlice.actions;
export default userSlice.reducer;
