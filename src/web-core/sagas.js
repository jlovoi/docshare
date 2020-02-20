import fetchUser from "./user/sagas";
import { sagas as docSagas } from "./doc";
import fetchAllUsers from "./users/sagas";

const { fetchDoc, submitDoc } = docSagas;

export default [fetchUser, fetchDoc, submitDoc, fetchAllUsers];
