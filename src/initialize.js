import { put, takeEvery } from "redux-saga/effects";

import { user } from "./web-core/user";
import { doc } from "./web-core/doc";
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
