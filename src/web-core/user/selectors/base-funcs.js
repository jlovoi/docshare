import { createSelector } from "reselect";

export const getUser = state => state.user.user;

export const getFirstName = createSelector(getUser, user => user.firstName);

export const getLastName = createSelector(getUser, user => user.lastName);

export const getFullName = createSelector(
  getUser,
  user => user.firstName + " " + user.lastName
);

export const getUserId = createSelector(getUser, user => user._id);

export const getTitle = createSelector(getUser, user => user.title);
