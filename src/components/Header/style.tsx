import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
	}),
);

export const CustomAppBar = styled(AppBar)`
	background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
	box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;
