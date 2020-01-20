import { createSlice } from '@reduxjs/toolkit';
import { DispatchProp } from 'react-redux';
import { get, test } from '../../api/firebase';

// createSlice() で actions と reducers を一気に生成
const userListModule = createSlice({
	name: 'user',
	initialState: {
		name,
	},
	reducers: {
		fetch: (state, action) => state,
	},
});

export const getUserAsyncTask = () => {
	return async function(dispatch: DispatchProp) {
		try {
			test();
		} catch (e) {
			console.error(e);
		}
	};
};

export default userListModule;
