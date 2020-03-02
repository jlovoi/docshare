import { call, put, takeEvery } from "redux-saga/effects";
import { actions } from "../reducer";
import API from "../../../api-core";

const { fetchDocInfo, setDocInfo } = actions;

function* saga({ payload: id }) {
  try {
    const docInfo = yield call(API.docs.fetchDocInfo, id);
    yield put(setDocInfo(docInfo));
  } catch (error) {
    console.error("ERROR FETCHING DOC INFO: ", error);
  }
}

function* fetchDocInfoSaga() {
  yield takeEvery(fetchDocInfo, saga);
}

export default fetchDocInfoSaga;
