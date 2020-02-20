import { call, put, takeEvery } from "redux-saga/effects";
import { actions } from "../reducer";
import API from "../../../api-core";

const { submitDoc } = API.docs;

const { submitDocInit, submitDocSuccess } = actions;

function* saga({ payload }) {
  try {
    const response = yield call(submitDoc, payload);
    const { data } = response;
    yield put(submitDocSuccess(data));
  } catch (error) {
    console.error("ERROR FETCHING DOC: ", error);
  }
}

function* submitDocSaga() {
  yield takeEvery(submitDocInit, saga);
}

export default submitDocSaga;
