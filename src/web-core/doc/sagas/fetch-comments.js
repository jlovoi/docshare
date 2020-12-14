import { call, put, takeEvery } from 'redux-saga/effects';
import { actions } from '../reducer';
import API from '../../../api-core';

const { fetchComments: apiFetchComments } = API.comments;

const { fetchCommentsInit, fetchCommentsSuccess } = actions;

function* saga({ payload: id }) {
	try {
		const comments = yield call(apiFetchComments, id);
		yield put(fetchCommentsSuccess(comments));
	} catch (error) {
		console.error('ERROR FETCHING COMMENTS: ', error);
	}
}

function* fetchCommentsSaga() {
	yield takeEvery(fetchCommentsInit, saga);
}

export default fetchCommentsSaga;
