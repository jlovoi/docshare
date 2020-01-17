import { combineReducers } from "@reduxjs/toolkit";

import { user } from "./user";
import { doc } from "./doc";

export default combineReducers({ user: user.reducer, doc: doc.reducer });
