import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import counterModule from '../../store/Counter';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

interface Counter {
	counter: number;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		spacing: {
			'& > *': {
				margin: theme.spacing(1),
			},
		},
	}),
);

const CustomIncrement = styled(Button)`
	background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
	box-shadow: 0 3px 5px 2px rgba(255, 135, 103, 0.3);
`;
const CustomDecrement = styled(Button)`
	background: linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);
	box-shadow: 0 3px 5px 2px rgba(42, 82, 152, 0.3);
`;

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state: Counter) => state.counter);
	const classes = useStyles({});

	const increment = () => dispatch(counterModule.actions.increment({}));
	const decrement = () => dispatch(counterModule.actions.decrement({}));

	return (
		<>
			<Typography variant="h3">Counter: {counter}</Typography>
			<Typography paragraph>Example Redux Toolkit</Typography>
			<div className={classes.spacing}>
				<CustomDecrement
					variant="contained"
					color="secondary"
					size="large"
					onClick={decrement}
				>
					decrement
				</CustomDecrement>
				<CustomIncrement
					variant="contained"
					color="primary"
					size="large"
					onClick={increment}
				>
					increment
				</CustomIncrement>
			</div>
		</>
	);
};

export default Counter;
