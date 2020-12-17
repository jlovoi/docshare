import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import TrashCan from '@material-ui/icons/Delete';
import ArrowUp from '@material-ui/icons/ArrowDropUp';
import ArrowDown from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles(theme => ({
	approverRoot: {
		border: '2px solid gray',
		borderRadius: '8px',
		padding: '12px',
		display: 'flex',
		flexDirection: 'row',
		minWidth: '600px',
		width: '60%',
		alignSelf: 'self-start',
		margin: '12px',
		position: 'relative',
	},
	approverType: {
		display: 'flex',
		flexDirection: 'column',
		flex: 5,
		justifyContent: 'center',
		marginRight: '48px',
	},
	arrowButton: {
		width: '12px',
	},
	button: {
		backgroundColor: '#bdbdbd',
		textTransform: 'none',
		margin: '6px',
	},
	deleteButton: {
		position: 'absolute',
		bottom: '0px',
		right: '0px',
	},
	reorder: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	selectedButton: {
		backgroundColor: '#008cff',
		textTransform: 'none',
		margin: '6px',
	},
	textField: {
		width: '80%',
		margin: '12px',
	},
	userInfo: {
		display: 'flex',
		flexDirection: 'column',
		flex: 10,
	},
}));

export default ({
	options,
	value = { firstName: '', lastName: '', email: '' },
	index = -1,
	length,
	move,
	onDelete,
	type,
	required,
	setter,
}) => {
	const classes = useStyles();
	if (!options && !required) return null;
	let opts = [];
	if (!options) {
		opts = [{ firstName: '', lastName: '', email: '' }];
	} else {
		opts = [...options, { firstName: '', lastName: '', email: '' }];
	}

	return (
		<div className={classes.approverRoot}>
			<div className={classes.reorder}>
				<Button
					className={classes.arrowButton}
					disabled={required || index === 0}
					onClick={() => move(index, index - 1)}
				>
					<ArrowUp />
				</Button>
				{index + 2}
				<Button
					className={classes.arrowButton}
					disabled={required || index + 1 === length}
					onClick={() => move(index, index + 1)}
				>
					<ArrowDown />
				</Button>
			</div>
			<div className={classes.userInfo}>
				<div>
					<Autocomplete
						options={opts}
						getOptionLabel={option =>
							!option ? '' : option.firstName + ' ' + option.lastName
						}
						disabled={required}
						value={value}
						getOptionSelected={(option, value) =>
							option._id === value._id || option.email === value.email
						}
						onChange={(_event, newValue) => {
							if (newValue) {
								setter({
									firstName: newValue.firstName,
									lastName: newValue.lastName,
									email: newValue.email,
								});
							}
						}}
						renderInput={params => (
							<TextField
								key={`approver-name-${index}`}
								{...params}
								className={classes.textField}
								label={'Name'}
							/>
						)}
					/>
				</div>
				<div>
					<Autocomplete
						options={opts || []}
						getOptionLabel={option => option.email || ''}
						disabled={required}
						value={value}
						getOptionSelected={(option, value) =>
							option._id === value._id || option.email === value.email
						}
						onChange={(_event, newValue) => {
							if (newValue) {
								setter({
									firstName: newValue.firstName,
									lastName: newValue.lastName,
									email: newValue.email,
								});
							}
						}}
						renderInput={params => (
							<TextField
								{...params}
								className={classes.textField}
								label={'Email'}
							/>
						)}
					/>
				</div>
			</div>
			<div className={classes.approverType}>
				<div>This person is an...</div>
				<Button
					onClick={() => setter({ type: 'editor' })}
					className={
						type === 'editor' ? classes.selectedButton : classes.button
					}
				>
					Editor
				</Button>
				<Button
					onClick={() => setter({ type: 'approver' })}
					className={
						type === 'approver' ? classes.selectedButton : classes.button
					}
				>
					Approver
				</Button>
			</div>{' '}
			{!required && index !== 0 && (
				<IconButton className={classes.deleteButton} onClick={onDelete}>
					<TrashCan />
				</IconButton>
			)}
		</div>
	);
};
