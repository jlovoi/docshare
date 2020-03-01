import { call, put, takeEvery } from "redux-saga/effects";
import { actions } from "../reducer";
import apiFetchDoc from "../../../api-core/docs/fetch-doc";

const { fetchDoc, setDoc } = actions;

function* saga({ payload: id }) {
  try {
    const doc = yield call(apiFetchDoc, id);

    yield put(setDoc(doc));
  } catch (error) {
    console.error("ERROR FETCHING DOC: ", error);
  }
}

function* fetchDocSaga() {
  yield takeEvery(fetchDoc, saga);
}

export default fetchDocSaga;
