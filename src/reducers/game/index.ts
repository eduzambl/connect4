import { combineReducers } from "redux";
import { reducer as board } from "./board";
import { reducer as wins } from "./wins";

export const reducer = combineReducers({
  board,
  wins,
});

export type LocalState = ReturnType<typeof reducer>;
