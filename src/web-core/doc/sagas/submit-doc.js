import { call, put, takeEvery } from "redux-saga/effects";
import { actions } from "../reducer";
import API from "../../../api-core";

const { submitDoc, upload } = API.docs;

const { submitDocInit, submitDocSuccess } = actions;

function* saga({ payload }) {
  try {
    const postBody = {
      ...payload
    };
    delete postBody.content;
    const postResponse = yield call(submitDoc, postBody);
    const { data } = postResponse;

    if (data) {
      const uploadBody = {
        buffer: payload.content,
        id: data._id
      };
      const uploadResponse = yield call(upload, uploadBody);
      yield put(submitDocSuccess(data));
    }
  } catch (error) {
    console.error("ERROR FETCHING DOC: ", error);
  }
}

function* submitDocSaga() {
  yield takeEvery(submitDocInit, saga);
}

export default submitDocSaga;
