import { put, takeEvery } from "redux-saga/effects";

import { user } from "./web-core";
import { doc } from "./web-core";
import initApplication from "./constants";

const { fetchUser } = user.actions;
const { fetchDoc } = doc.actions;

function* init() {
  yield put(fetchUser("123"));
  yield put(fetchDoc("123"));
}

function* initializeApp() {
  yield takeEvery(initApplication, init);
}

export default initializeApp;
