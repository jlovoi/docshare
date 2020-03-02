import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: []
};

const users = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    fetchUsers: () => {
      // saga
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    }
  }
});

const reducer = users.reducer;
const actions = users.actions;

export { reducer, actions };
