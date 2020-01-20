import {
	combineReducers,
	configureStore,
	getDefaultMiddleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterModule from './Counter';
import userListModule from './UserList';

// rootReducer
const rootReducer = combineReducers({
	counter: counterModule.reducer,
	user: userListModule.reducer,
});

// setup
export const setupStore = () => {
	const middlewares = [...getDefaultMiddleware(), logger];

	const store = configureStore({
		reducer: rootReducer,
		middleware: middlewares,
	});
	return store;
};
