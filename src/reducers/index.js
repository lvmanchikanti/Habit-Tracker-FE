import counterReducer from "./counter";
import groupReducer from "./groupReducer";
import habitReducer from "./habitReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  groups: groupReducer,
  habits: habitReducer
});

export default rootReducer;
