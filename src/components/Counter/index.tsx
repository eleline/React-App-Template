import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import counterModule from '../../store/Counter';
import Typography from '@material-ui/core/Typography';
import { useStyles, CustomDecrement, CustomIncrement } from './style';

interface Counter {
	counter: number;
}

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
