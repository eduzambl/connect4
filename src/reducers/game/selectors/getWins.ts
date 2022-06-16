import { LocalState } from "..";
import { WinsState } from "../wins";

/**
 * Return the current player (as a color) given a board game.
 */
export const getWins = (state: LocalState): WinsState => {
  return state.wins;
};
