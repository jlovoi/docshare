import fetchUser from "./user/sagas";
import fetchDocSaga from "./doc/sagas";
import fetchAllUsers from "./users/sagas";

export default [fetchUser, fetchDocSaga, fetchAllUsers];
