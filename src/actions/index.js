import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from "./types";

// list of action creators (functions that return actions) goes here

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
