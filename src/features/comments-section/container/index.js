import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Component from '../view';

import Core from '../../../web-core';

const Container = ({ comments = [], addComment = () => {}, userId = '' }) => {
	const dispatch = useDispatch();
	const location = useLocation();

	const docId = location.pathname.substring(6);

	useEffect(() => {
		dispatch(Core.doc.actions.fetchCommentsInit(docId));
	}, [docId, dispatch]);

	return (
		<Component
			comments={comments}
			userId={userId}
			addComment={addComment}
			docId={docId}
		/>
	);
};

const mapStateToProps = state => ({
	userId: Core.user.selectors.getUserId(state),
	comments: Core.doc.selectors.getComments(state),
});

const mapDispatchToProps = dispatch => ({
	addComment: comment => dispatch(Core.doc.actions.postCommentInit(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
