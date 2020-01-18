import { combineReducers } from "@reduxjs/toolkit";

import { reducer as user } from "./user";
import { reducer as doc } from "./doc";

export default combineReducers({ user, doc });
