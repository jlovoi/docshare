import { call, put, takeEvery } from "redux-saga/effects";
import { actions } from "../reducer";
import apiFetchUser from "../../../api-core/user/fetch-user";

const { fetchUser, setUser } = actions;

function* saga({ payload }) {
  try {
    const { id } = payload;

    const user = yield call(apiFetchUser, { id });
    yield put(setUser(user));
  } catch (error) {
    console.error("ERROR FETCHING USER: ", error);
  }
}

function* fetchUserSaga() {
  yield takeEvery(fetchUser, saga);
}

export default fetchUserSaga;
