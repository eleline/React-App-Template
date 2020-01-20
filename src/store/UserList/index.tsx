import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DispatchProp } from 'react-redux';
import { get, test } from '../../api/firebase';

interface userState {
	user: {
		name: string;
		age: number;
	};
}

const initialState: userState = {
	user: {
		name: '',
		age: 0,
	},
};

// createSlice() で actions と reducers を一気に生成
const userListModule = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		setUser: (state, action: PayloadAction<userState>) => action.payload,
		setUserDatabase: (state, action) => state,
	},
});

// export const getUserAsyncTask = () => {
// 	return async function(
// 		dispatch: DispatchProp,
// 		action: PayloadAction<userState>,
// 	) {
// 		console.log(action.payload);
// 		try {
// 			test();
// 		} catch (e) {
// 			console.error(e);
// 		}
// 	};
// };

export default userListModule;
