import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	bubbleRoot: {
		padding: '6px 18px 6px 18px',
		display: 'flex',
		flexDirection: 'row',
		width: '90%',
	},
	bubble: {
		borderRadius: '12px',
		borderBottomLeftRadius: '0px',
		width: '100%',
		padding: '12px',
		backgroundColor: theme.palette.gray,
	},
	bubbleFromRight: {
		borderRadius: '12px',
		borderBottomRightRadius: '0px',
		width: '100%',
		padding: '12px',
		backgroundColor: theme.palette.cactus,
	},
	extend: {
		height: '12px',
		width: '11px',
		background: `radial-gradient(circle at top left,transparent 11px,${theme.palette.gray} 0) top left`,
	},
	extendRight: {
		height: '12px',
		width: '11px',
		background: `radial-gradient(circle at top right,transparent 11px,${theme.palette.cactus} 0) top right`,
	},
	flexbox: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
	},
}));

const Bubble = ({ content, fromRight }) => {
	const classes = useStyles();

	return (
		<div className={classes.bubbleRoot}>
			{!fromRight && (
				<div className={classes.flexbox}>
					<div className={classes.extend} />
				</div>
			)}
			<div className={fromRight ? classes.bubbleFromRight : classes.bubble}>
				{content}
			</div>
			{fromRight && (
				<div className={classes.flexbox}>
					<div className={classes.extendRight} />
				</div>
			)}
		</div>
	);
};

export default Bubble;
