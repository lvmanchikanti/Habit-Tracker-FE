import counterReducer from "./counter";
import groupReducer from "./groupReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  group: groupReducer
});

export default rootReducer;
