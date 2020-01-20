import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import userListModule, { fetchAsync, setUser } from '../../store/UserList';
import { ButtonArea } from './style';

interface User {
	user: {
		name: string;
		age: number;
	};
}

const UserList: React.FC = () => {
	const dispatch = useDispatch();
	const user = useSelector((state: User) => state.user);

	const [name, setName] = useState('');

	const changeUser = (inputName: string) => {
		setName(inputName);
	};

	const testUser = {
		name: name,
		age: 20,
	};

	const setUser = () => dispatch(userListModule.actions.setUser(testUser));

	return (
		<>
			<Typography variant="h3" component="h2">
				My name is {user.name}
			</Typography>
			<form noValidate autoComplete="off">
				<TextField
					id="name"
					label="Your name"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						changeUser(e.target.value);
					}}
				/>
			</form>
			<ButtonArea>
				<Button onClick={setUser}>set User</Button>
				<Button
					variant="contained"
					color="primary"
					onClick={() => dispatch(fetchAsync())}
				>
					set user database
				</Button>
			</ButtonArea>
		</>
	);
};

export default UserList;
