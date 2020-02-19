import { call, put, takeEvery } from "redux-saga/effects";
import { actions } from "../reducer";
import { user as userAPI } from "../../../api-core";

const { fetchUser, setUser } = actions;

function* saga({ payload }) {
  try {
    const { id } = payload;

    const user = yield call(userAPI.user, { id });
    yield put(setUser(user));
  } catch (error) {
    console.error("ERROR FETCHING USER: ", error);
  }
}

function* fetchUserSaga() {
  yield takeEvery(fetchUser, saga);
}

export default fetchUserSaga;
