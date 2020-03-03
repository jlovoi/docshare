import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  confirmation: []
};

const auth = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setConfirmation: (state, { payload }) => {
      state.confirmation = payload;
    }
  }
});

const reducer = auth.reducer;
const actions = auth.actions;

export { reducer, actions };
