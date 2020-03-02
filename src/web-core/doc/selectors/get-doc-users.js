import { createSelector } from "reselect";

import { getDocument } from "./base-funcs";

export default createSelector(
  getDocument,
  document => (document && document.users) || []
);
