import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		spacing: {
			'& > *': {
				margin: theme.spacing(1),
			},
		},
	}),
);

export const CustomIncrement = styled(Button)`
	background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
	box-shadow: 0 3px 5px 2px rgba(255, 135, 103, 0.3);
`;
export const CustomDecrement = styled(Button)`
	background: linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);
	box-shadow: 0 3px 5px 2px rgba(42, 82, 152, 0.3);
`;
