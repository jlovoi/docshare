import { createSlice } from "@reduxjs/toolkit";

const organization = createSlice({
  name: "organization",
  initialState: {},
  reducers: {
    fetchOrganization: () => {
      // saga
    },
    setOrganization: (state, { payload }) => {
      state.name = payload.name;
      state._id = payload._id;
    }
  }
});

const reducer = organization.reducer;
const actions = organization.actions;

export { reducer, actions };
