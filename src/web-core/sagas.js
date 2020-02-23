import fetchUser from "./user/sagas";
import { sagas as docSagas } from "./doc";
import fetchAllUsers from "./users/sagas";

const { fetchDoc, submitDoc, download, fetchUsersDocs } = docSagas;

export default [
  fetchUser,
  fetchDoc,
  download,
  submitDoc,
  fetchAllUsers,
  fetchUsersDocs
];
