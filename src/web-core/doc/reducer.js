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
      state.doc = action.payload;
    }
  }
});
export default doc;
