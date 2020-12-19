import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	usersDocs: [],
	docInfo: {},
};

const doc = createSlice({
	name: 'doc',
	initialState,
	reducers: {
		approveDoc: () => {
			// saga
		},
		approveDocSuccess: (state, { payload: id }) => {
			state.document.latestApproval = id;
		},
		downloadFile: () => {
			// saga
		},
		fetchCommentsInit: () => {
			//saga
		},
		fetchCommentsSuccess: (state, { payload }) => {
			state.comments = payload;
		},
		fetchUsersDocsInit: () => {
			// saga
		},
		fetchUsersDocsSuccess: (state, { payload }) => {
			state.usersDocs = payload;
		},
		fetchDoc: () => {
			// saga
		},
		postCommentInit: () => {
			//saga
		},
		postCommentSuccess: (state, { payload }) => {
			state.comments = [...state.comments, payload];
		},
		patchFileInit: () => {
			//saga
		},
		setDoc: (state, action) => {
			state.document = action.payload;
		},
		fetchDocInfo: () => {
			// saga
		},
		setDocInfo: (state, action) => {
			state.docInfo = action.payload;
		},
		submitDocInit: () => {
			// saga
		},
		submitDocSuccess: () => {},
	},
});

const reducer = doc.reducer;
const actions = doc.actions;

export { reducer, actions };
