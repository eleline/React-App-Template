import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		toolbar: theme.mixins.toolbar,
		linkText: {
			color: 'inherit',
			textDecoration: 'none',
			'&:hover': {
				color: 'inherit',
			},
		},
	}),
);
