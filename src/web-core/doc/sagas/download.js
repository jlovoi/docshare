import { call, takeEvery } from "redux-saga/effects";
import { actions } from "../reducer";
import API from "../../../api-core";

const { download } = API.docs;

const { downloadFile } = actions;

function* downloadDocx({ payload: id }) {
  try {
    yield call(download, id);
  } catch (error) {
    console.error("ERROR DOWNLOADING DOCX FILE: ", error);
  }
}

function* watchDownload() {
  yield takeEvery(downloadFile, downloadDocx);
}

export default watchDownload;
