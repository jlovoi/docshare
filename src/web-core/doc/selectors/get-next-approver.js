import { createSelector } from "reselect";

import { getDocument } from "./base-funcs";

export default createSelector(getDocument, document => {
  const currentIndex =
    document &&
    document.users &&
    document.users.findIndex(
      user => user && user._id === document.latestApproval
    );

  if (currentIndex > -1 && currentIndex + 1 < document.users.length) {
    return document.users[currentIndex + 1];
  }
  return {};
});
