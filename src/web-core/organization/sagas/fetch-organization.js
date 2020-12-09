import { call, put, takeEvery } from "redux-saga/effects";
import { actions } from "../reducer";
import API from "../../../api-core";

const { fetchOrganization: apiFetch } = API.organization;
const { fetchOrganization, setOrganization } = actions;

function* saga({ payload }) {
  try {
    const { id } = payload;

    const organization = yield call(apiFetch, id);
    yield put(setOrganization(organization));
  } catch (error) {
    console.error("ERROR FETCHING ORGANIZATION: ", error);
  }
}

function* fetchOrganizationSaga() {
  yield takeEvery(fetchOrganization, saga);
}

export default fetchOrganizationSaga;
