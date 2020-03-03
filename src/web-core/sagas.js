import { sagas as docSagas } from "./doc";
import { sagas as usersSagas } from "./users/";
import { sagas as userSagas } from "./user";

const {
  approve,
  fetchDoc,
  fetchDocInfo,
  submitDoc,
  download,
  fetchUsersDocs
} = docSagas;

const { fetchUser, fetchUserByUsername } = userSagas;

const { fetchAllUsers } = usersSagas;

export default [
  approve,
  fetchUser,
  fetchUserByUsername,
  fetchDoc,
  fetchDocInfo,
  download,
  submitDoc,
  fetchAllUsers,
  fetchUsersDocs
];
