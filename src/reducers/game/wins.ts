import { WinAction } from "../../actions/setWin";

export type WinsState = {
  red: number;
  yellow: number;
};

const initialState: WinsState = {
  red: 0,
  yellow: 0,
};

export const reducer = (
  state: WinsState = initialState,
  action: WinAction
): WinsState => {
  switch (action.type) {
    case "SET_WIN":
      const { color } = action.payload;
      const wins = state[color!] + 1;
      return {
        ...state,
        [color as string]: wins,
      };

    default:
      return state;
  }
};
