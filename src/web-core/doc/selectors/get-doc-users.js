import { createSelector } from "react-redux";

import { getDocument } from "./base-funcs";

export default createSelector(getDocument, document => document.users);
