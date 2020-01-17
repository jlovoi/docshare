import { call, put, takeEvery } from "redux-saga/effects";
import doc from "../reducer";
import apiFetchDoc from "../../../api-core/docs/fetch-doc";

const { fetchDoc, setDoc } = doc.actions;

function* saga({ payload }) {
  try {
    const { id } = payload;

    const doc = yield call(apiFetchDoc, { id });
    yield put(setDoc(doc));
  } catch (error) {
    console.error("ERROR FETCHING DOC: ", error);
  }
}

function* fetchDocSaga() {
  yield takeEvery(fetchDoc, saga);
}

export default fetchDocSaga;
