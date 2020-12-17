import { sagas as docSagas } from './doc';
import { sagas as usersSagas } from './users/';
import { sagas as userSagas } from './user';
import { sagas as organizationSagas } from './organization';

const {
	approve,
	fetchComments,
	postComment,
	fetchDoc,
	fetchDocInfo,
	submitDoc,
	download,
	fetchUsersDocs,
	patchFile,
} = docSagas;

const { fetchUser, fetchUserByUsername } = userSagas;

const { fetchAllUsers } = usersSagas;

const { fetchOrganization } = organizationSagas;

export default [
	approve,
	fetchComments,
	postComment,
	fetchUser,
	fetchUserByUsername,
	fetchDoc,
	fetchDocInfo,
	fetchOrganization,
	download,
	submitDoc,
	fetchAllUsers,
	fetchUsersDocs,
	patchFile,
];
