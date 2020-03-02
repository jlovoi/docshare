import { call, put, takeEvery, select } from "redux-saga/effects";
import { actions } from "../reducer";
import { selectors } from "../../user";
import API from "../../../api-core";

const { approveDoc, approveDocSuccess } = actions;
const { getUserId } = selectors;

function* saga({ payload: docId }) {
  try {
    const userId = yield select(getUserId);
    yield call(API.docs.approve, { userId, docId });
    yield put(approveDocSuccess(userId));
  } catch (error) {
    console.error("ERROR FETCHING DOC INFO: ", error);
  }
}

function* approveDocSaga() {
  yield takeEvery(approveDoc, saga);
}

export default approveDocSaga;
