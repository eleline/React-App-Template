import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

const useStyles = makeStyles((theme: Theme) =>
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

const CustomAppBar = styled(AppBar)`
	background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
	box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;

const Header: React.FC = () => {
	const classes = useStyles({});

	return (
		<div className={classes.root}>
			<CustomAppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						React App
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</CustomAppBar>
		</div>
	);
};

export default Header;
