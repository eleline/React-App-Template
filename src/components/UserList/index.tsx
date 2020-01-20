import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

interface UserState {
	user: {
		name: string;
		age: number;
	};
}

const UserList: React.FC = () => {
	const dispatch = useDispatch;
	const counter = useSelector((state: UserState) => state.user);

	return (
		<>
			<p>Test</p>
			<Button>Click</Button>
		</>
	);
};

export default UserList;
