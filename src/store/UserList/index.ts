import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { get, test } from '../../api/firebase';
import { Dispatch } from 'react';

interface userState {
	name: string;
	age: number;
}

const initialState: userState = {
	name: 'Test',
	age: 0,
};

// 非同期処理をしたい
const userListModule = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		fetchStart: state => state,
		setUser: (state, action: PayloadAction<userState>) => action.payload,
	},
});

export const actions = userListModule.actions;

export function fetchAsync() {
	return async function(dispatch: Dispatch<any>) {
		dispatch(userListModule.actions.fetchStart());
	};
}

export default userListModule;
