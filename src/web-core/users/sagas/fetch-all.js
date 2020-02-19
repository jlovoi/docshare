import { call, put, takeEvery } from "redux-saga/effects";
import { actions } from "../reducer";
import { user as userAPI } from "../../../api-core";

const { fetchUsers, setUsers } = actions;

function* saga() {
  try {
    const users = yield call(userAPI.all);
    yield put(setUsers(users));
  } catch (error) {
    console.error("ERROR FETCHING USERS: ", error);
  }
}

function* fetchUserSaga() {
  yield takeEvery(fetchUsers, saga);
}

export default fetchUserSaga;
