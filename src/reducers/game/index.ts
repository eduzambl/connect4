import { combineReducers } from "redux";
import { reducer as board } from "./board";

export const reducer = combineReducers({
  board,
});

export type LocalState = ReturnType<typeof reducer>;
