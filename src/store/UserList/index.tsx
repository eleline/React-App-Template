import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { get, test } from '../../api/firebase';
import { DispatchProp } from 'react-redux';

interface userState {
	name: string;
	age: number;
}

const initialState: userState = {
	name: 'Test',
	age: 0,
};

// createSlice() で actions と reducers を一気に生成
const userListModule = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		fetchStart: (state, action) => state,
		setUser: (state, action: PayloadAction<userState>) => action.payload,
	},
});

export const { fetchStart, setUser } = userListModule.actions;

export function fetchAsync() {
	return async function(dispatch) {
		dispatch(userListModule.actions.fetchStart({}));

		try {
			console.log('fetchAsync');
		} catch (e) {
			console.error(e);
		}
	};
}

export default userListModule;
