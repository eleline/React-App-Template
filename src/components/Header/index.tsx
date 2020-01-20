import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles, CustomAppBar } from './style';

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
