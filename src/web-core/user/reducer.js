import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "Joseph",
  lastName: "Lovoi",
  id: "AAAA-BBBB-CCCC-DDDD",
  title: "Software Developer"
};

const user = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setFirstName: (state, name) => {
      state.firstName = name;
    },
    setLastName: (state, name) => {
      state.lastName = name;
    },
    setTitle: (state, title) => {
      state.title = title;
    }
  }
});

export default user;
