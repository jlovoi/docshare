import { put, takeEvery } from "redux-saga/effects";

import { user, doc, users } from "./web-core";
import initApplication from "./constants";

const { fetchUser } = user.actions;
const { fetchDoc } = doc.actions;
const { fetchUsers } = users.actions;

function* init() {
  yield put(fetchUser("123"));
  yield put(fetchDoc("123"));
  yield put(fetchUsers());
}

function* initializeApp() {
  yield takeEvery(initApplication, init);
}

export default initializeApp;
