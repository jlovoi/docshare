import { combineReducers } from "@reduxjs/toolkit";

import { reducer as auth } from "./auth";
import { reducer as user } from "./user";
import { reducer as doc } from "./doc";
import { reducer as users } from "./users";

export default combineReducers({
  auth,
  user,
  doc,
  users
});
