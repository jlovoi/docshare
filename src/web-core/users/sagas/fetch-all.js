import { call, put, takeEvery } from "redux-saga/effects";
import { actions } from "../reducer";
import API from "../../../api-core";

const { all } = API.user;
const { fetchUsers, setUsers } = actions;

function* saga() {
  try {
    const users = yield call(all);
    yield put(setUsers(users));
  } catch (error) {
    console.error("ERROR FETCHING USERS: ", error);
  }
}

function* fetchUserSaga() {
  yield takeEvery(fetchUsers, saga);
}

export default fetchUserSaga;
