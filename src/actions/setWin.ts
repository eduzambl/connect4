import { Color } from "../types";

export interface WinAction {
  type: "SET_WIN";
  payload: {
    color: Color;
  };
}

export function setWin(color: Color): WinAction {
  return {
    type: "SET_WIN",
    payload: { color },
  };
}
