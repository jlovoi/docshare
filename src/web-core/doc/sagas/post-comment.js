import { call, takeEvery, put } from 'redux-saga/effects';

import { actions } from '../reducer';
import API from '../../../api-core';

const { postComment } = API.comments;

const { postCommentInit, postCommentSuccess } = actions;

function* saga({ payload }) {
	try {
		const comment = yield call(postComment, payload);
		yield put(postCommentSuccess(comment));
	} catch (error) {
		console.error('ERROR POSTING COMMENT: ', error);
	}
}

function* watchPostComment() {
	yield takeEvery(postCommentInit, saga);
}

export default watchPostComment;
