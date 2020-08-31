import { createSlice } from "@reduxjs/toolkit";

const organization = createSlice({
  name: "organization",
  initialState: {},
  reducers: {
    fetchOrganization: () => {
      // saga
    },
    setOrganization: (state, action) => {
      state = action.payload;
    }
  }
});

const reducer = organization.reducer;
const actions = organization.actions;

export { reducer, actions };
