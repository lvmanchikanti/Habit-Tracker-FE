import groupReducer from "./groupReducer";
import habitReducer from "./habitReducer";
import userReducer from "./userReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  groups: groupReducer,
  habits: habitReducer,
  users: userReducer
});

export default rootReducer;
