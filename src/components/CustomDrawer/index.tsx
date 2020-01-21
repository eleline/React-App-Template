import React from 'react';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import { useStyles } from './style';

interface DrawerProps {
	mobileToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Drawer: React.FC<DrawerProps> = props => {
	const classes = useStyles({});

	const closeDrawer = () => {
		return props.mobileToggle(false);
	};

	return (
		<>
			<div className={classes.toolbar} />
			<Divider />
			<List>
				{['user-list', 'counter'].map((text, index) => (
					<Link
						to={text}
						key={text}
						className={classes.linkText}
						onClick={closeDrawer}
					>
						<ListItem button>
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					</Link>
				))}
			</List>
			<Divider />
			<List>
				{['Sample1', 'Sample2', 'Sample3', 'Sample4'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</>
	);
};

export default Drawer;
