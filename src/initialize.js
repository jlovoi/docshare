import { put, takeEvery } from "redux-saga/effects";

import Core from "./web-core";
import initApplication from "./constants";

const { fetchUsers } = Core.users.actions;

function* init() {
  // yield put(fetchUsers());
}

function* initializeApp() {
  yield takeEvery(initApplication, init);
}

export default initializeApp;
