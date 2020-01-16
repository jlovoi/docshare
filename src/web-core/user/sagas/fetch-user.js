import { call, put, takeEvery } from "redux-saga/effects";
import user from "../reducer";
import apiFetchUser from "../../../api-core/user/fetch-user";

const { fetchUser, setUser } = user.actions;

function* saga({ payload }) {
  try {
    const { id } = payload;

    console.log("hi");

    const user = yield call(apiFetchUser, { id });
    console.log("123");
    yield put(setUser(user));
  } catch (error) {
    console.error("ERROR FETCHING USER: ", error);
  }
}

function* fetchUserSaga() {
  yield takeEvery(fetchUser, saga);
}

export default fetchUserSaga;
