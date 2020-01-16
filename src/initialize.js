import { put, takeEvery } from "redux-saga/effects";

import { user } from "./web-core/user";
import initApplication from "./constants";

const { fetchUser } = user.actions;

function* init() {
  console.log("HEllo");
  yield put(fetchUser("123"));
}

function* initializeApp() {
  yield takeEvery(initApplication, init);
}

export default initializeApp;
