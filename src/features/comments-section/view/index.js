import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import moment from 'moment';

import { Bubble } from '../../../components';

const useStyles = makeStyles(theme => ({
	addComment: {
		display: 'flex',
		flexDirection: 'row',
		width: '98%',
		minWidth: '200px',
		height: '70px',
		backgroundColor: theme.palette.offwhite,
		border: `solid 2px ${theme.palette.sand}`,
		borderRadius: '20px',
	},
	commentsSectionContainer: {
		marginTop: 'auto',
	},
	comment: {
		width: '100%',
	},
	commentDetails: {
		fontSize: 10,
		marginLeft: '12%',
	},
	commentDetailsFromSelf: {
		fontSize: 10,
		textAlign: 'end',
		marginRight: '12%',
	},
	commentsBox: {
		backgroundColor: theme.palette.sand,
		borderRadius: '20px',
		height: '65vh',
		width: '20%',
		margin: '2.5%',
		right: 0,
		minWidth: '200px',
		position: 'fixed',
		flexShrink: 0,
	},
	scrollable: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column-reverse',
		overflow: 'hidden',
		overflowY: 'auto',
		'&::-webkit-scrollbar': {
			width: '0.4em',
		},
		'&::-webkit-scrollbar-track': {
			boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
			borderRadius: '10px',
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: 'rgba(0,0,0,.1)',
			borderRadius: '10px',
		},
	},
	sendButton: {
		backgroundColor: theme.palette.cactus,
		borderRadius: '20px',
		borderTopLeftRadius: '0px',
		borderBottomLeftRadius: '0px',
		marginLeft: 'auto',
	},
	text: {
		width: '75%',
		marginLeft: '12px',
	},
}));

const sendComment = (text, setText, addComment, userId, docId) => () => {
	addComment({ userId, docId, comment: text, timestamp: new Date().valueOf() });
	setText('');
};

const CommentsSection = ({ comments, userId, docId, addComment }) => {
	const classes = useStyles();

	const [text, setText] = React.useState('');

	return (
		<div className={classes.commentsBox}>
			<div className={classes.scrollable}>
				<div className={classes.commentsSectionContainer}>
					{comments.map(comment => {
						const self = comment.userId === userId;
						return (
							<div key={comment._id} className={classes.comment}>
								<div
									className={
										self
											? classes.commentDetailsFromSelf
											: classes.commentDetails
									}
								>
									{`${self ? 'You' : comment.userName}, ${moment(
										comment.timestamp,
									).format('MMM D h:mm a')}`}
								</div>
								<Bubble content={comment.comment} fromRight={self} />
							</div>
						);
					})}
					<div className={classes.addComment}>
						<TextField
							className={classes.text}
							value={text}
							onChange={e => setText(e.target.value)}
							multiline
							rows={3}
						/>
						<Button
							disabled={!text}
							className={classes.sendButton}
							onClick={sendComment(text, setText, addComment, userId, docId)}
						>
							Send
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommentsSection;
