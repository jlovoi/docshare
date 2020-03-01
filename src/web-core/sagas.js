import fetchUser from "./user/sagas";
import { sagas as docSagas } from "./doc";
import fetchAllUsers from "./users/sagas";

const {
  fetchDoc,
  fetchDocInfo,
  submitDoc,
  download,
  fetchUsersDocs
} = docSagas;

export default [
  fetchUser,
  fetchDoc,
  fetchDocInfo,
  download,
  submitDoc,
  fetchAllUsers,
  fetchUsersDocs
];
