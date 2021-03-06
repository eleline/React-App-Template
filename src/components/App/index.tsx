import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Counter from '../Counter';
import UserList from '../UserList';
import CustomDrawer from '../CustomDrawer';
import { StylesProvider } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles, AppArea, CustomAppBar } from './style';

interface ResponsiveDrawerProps {
	container?: Element;
}

const App = (props: ResponsiveDrawerProps) => {
	const { container } = props;
	const classes = useStyles({});
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<StylesProvider injectFirst>
			<Router>
				<AppArea>
					<div className={classes.root}>
						<CustomAppBar position="fixed" className={classes.appBar}>
							<Toolbar>
								<IconButton
									color="inherit"
									aria-label="open drawer"
									edge="start"
									onClick={handleDrawerToggle}
									className={classes.menuButton}
								>
									<MenuIcon />
								</IconButton>
								<Typography variant="h6" noWrap>
									React App
								</Typography>
							</Toolbar>
						</CustomAppBar>
						<nav className={classes.drawer} aria-label="mailbox folders">
							<Hidden smUp implementation="css">
								<Drawer
									container={container}
									variant="temporary"
									anchor={theme.direction === 'rtl' ? 'right' : 'left'}
									open={mobileOpen}
									onClose={handleDrawerToggle}
									classes={{
										paper: classes.drawerPaper,
									}}
									ModalProps={{
										keepMounted: true,
									}}
								>
									<CustomDrawer mobileToggle={setMobileOpen} />
								</Drawer>
							</Hidden>
							<Hidden xsDown implementation="css">
								<Drawer
									classes={{
										paper: classes.drawerPaper,
									}}
									variant="permanent"
									open
								>
									<CustomDrawer mobileToggle={setMobileOpen} />
								</Drawer>
							</Hidden>
						</nav>
						<main className={classes.content}>
							<div className={classes.toolbar} />
							<Switch>
								<Route path="/user-list" exact component={UserList} />
								<Route path="/counter" exact component={Counter} />
								<Redirect to="/user-list" />
							</Switch>
						</main>
					</div>
				</AppArea>
			</Router>
		</StylesProvider>
	);
};

export default App;
