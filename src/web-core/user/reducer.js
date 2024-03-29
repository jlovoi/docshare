import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {}
  // firstName: "Joel",
  // lastName: "Ovoi",
  // id: "AAAA-BBBB-CCCC-DDDD",
  // title: "Software Developer"
};

const user = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    fetchUser: () => {
      // saga
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    }
  }
});

const reducer = user.reducer;
const actions = user.actions;

export { reducer, actions };
