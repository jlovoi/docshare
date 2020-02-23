import { call, put, takeEvery } from "redux-saga/effects";
import { actions } from "../reducer";
import API from "../../../api-core";

const { fetchUsersDocsInit, fetchUsersDocsSuccess } = actions;

function* saga({ payload: id }) {
  try {
    if (id) {
      const response = yield call(API.docs.allByUser, id);
      yield put(fetchUsersDocsSuccess(response));
    }
  } catch (error) {
    console.error("ERROR FETCHING USER DOCS: ", error);
  }
}

function* fetchDocSaga() {
  yield takeEvery(fetchUsersDocsInit, saga);
}

export default fetchDocSaga;
