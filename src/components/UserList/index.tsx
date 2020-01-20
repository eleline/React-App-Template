import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import userListModule from '../../store/UserList';

interface UserState {
	user: {
		name: string;
		age: number;
	};
}

const UserList: React.FC = () => {
	const dispatch = useDispatch();
	const user = useSelector((state: UserState) => state.user);
	console.log(user);

	const testUser = {
		user: {
			name: 'RF',
			age: 20,
		},
	};

	const setUser = () => dispatch(userListModule.actions.setUser(testUser));
	const setUserDatabase = () =>
		dispatch(userListModule.actions.setUserDatabase({}));

	return (
		<>
			<h2>My name is {user.name}</h2>
			<Button onClick={setUser}>setUser</Button>
			<Button variant="contained" color="primary" onClick={setUserDatabase}>
				setUserDatabase
			</Button>
		</>
	);
};

export default UserList;
