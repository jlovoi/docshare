import { call, put, takeEvery } from "redux-saga/effects";
import { actions } from "../reducer";
import { actions as authActions } from "../../auth";
import { actions as orgActions } from "../../organization";
import API from "../../../api-core";

const { fetchUserByUsername } = API.user;
const { setUser } = actions;

function* saga({ payload }) {
  try {
    const { username } = payload;
    const user = yield call(fetchUserByUsername, username);
    yield put(setUser(user));
    yield put(orgActions.fetchOrganization(user.organization));
  } catch (error) {
    console.error("ERROR FETCHING USER: ", error);
  }
}

function* fetchUserByUsernameSaga() {
  yield takeEvery(authActions.setConfirmation, saga);
}

export default fetchUserByUsernameSaga;
