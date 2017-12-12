// import { combineReducers } from "redux";
// import * as reducers from "../reducers";
// const todoApp = combineReducers(reducers);
//
// export default todoApp;

import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
