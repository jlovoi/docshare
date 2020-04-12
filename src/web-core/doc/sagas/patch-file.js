import { call, takeEvery } from "redux-saga/effects";

import { actions } from "../reducer";
import API from "../../../api-core";

const { patch } = API.docs;

const { patchFileInit } = actions;

function* saga({ payload }) {
  try {
    const uploadBody = {
      buffer: payload.content,
      id: payload.id
    };
    yield call(patch, uploadBody);
    window.location.reload();
  } catch (error) {
    console.error("ERROR PATCHING FILE: ", error);
  }
}

function* watchPatchFile() {
  yield takeEvery(patchFileInit, saga);
}

export default watchPatchFile;
