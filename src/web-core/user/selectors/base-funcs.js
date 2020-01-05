export const getFirstName = state => state.user.firstName;

export const getLastName = state => state.user.lastName;

export const getFullName = state =>
  state.user.firstName + " " + state.user.lastName;

export const getUserId = state => state.user.id;

export const getTitle = state => state.user.title;
