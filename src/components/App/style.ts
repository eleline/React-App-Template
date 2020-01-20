import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import blueGrey from '@material-ui/core/colors/blueGrey';
import styled from 'styled-components';

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
		},
		drawer: {
			[theme.breakpoints.up('sm')]: {
				width: drawerWidth,
				flexShrink: 0,
			},
		},
		appBar: {
			[theme.breakpoints.up('sm')]: {
				width: `calc(100% - ${drawerWidth}px)`,
				marginLeft: drawerWidth,
			},
		},
		menuButton: {
			marginRight: theme.spacing(2),
			[theme.breakpoints.up('sm')]: {
				display: 'none',
			},
		},
		toolbar: theme.mixins.toolbar,
		drawerPaper: {
			width: drawerWidth,
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
		},
	}),
);

const backgroundColor = blueGrey[50];

export const CustomAppBar = styled(AppBar)`
	background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
	box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;
export const AppArea = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: ${backgroundColor};
`;
