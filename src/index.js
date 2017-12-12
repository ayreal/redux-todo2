import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/index.js";

// ONCE actions and reducers are done, you can test functionality as below:

// import { addTodo, toggleTodo, setVisibilityFilter } from "./actions";
// import { VisibilityFilters } from "./actions/types";
let store = createStore(reducer);
console.log(store.getState());
//
// // Every time the state changes, log it
// // Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
//
// // Dispatch some actions
// store.dispatch(addTodo("Learn about actions"));
// store.dispatch(addTodo("Learn about reducers"));
// store.dispatch(addTodo("Learn about store"));
// store.dispatch(toggleTodo(0));
// store.dispatch(toggleTodo(1));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
//
// // Stop listening to state updates
// unsubscribe();

const MyApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<MyApp />, document.getElementById("root"));
