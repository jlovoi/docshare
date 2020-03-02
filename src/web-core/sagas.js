import fetchUser from "./user/sagas";
import { sagas as docSagas } from "./doc";
import fetchAllUsers from "./users/sagas";

const {
  approve,
  fetchDoc,
  fetchDocInfo,
  submitDoc,
  download,
  fetchUsersDocs
} = docSagas;

export default [
  approve,
  fetchUser,
  fetchDoc,
  fetchDocInfo,
  download,
  submitDoc,
  fetchAllUsers,
  fetchUsersDocs
];
