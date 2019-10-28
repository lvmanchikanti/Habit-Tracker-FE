import groupReducer from "./groupReducer";
import habitReducer from "./habitReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  groups: groupReducer,
  habits: habitReducer
});

export default rootReducer;
