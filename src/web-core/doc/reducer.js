import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  document: {}
};

const doc = createSlice({
  name: "doc",
  initialState,
  reducers: {
    fetchDoc: () => {
      // saga
    },
    setDoc: (state, action) => {
      state.document = action.payload;
    }
  }
});

const reducer = doc.reducer;
const actions = doc.actions;

export { reducer, actions };
