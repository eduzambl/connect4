import { BoardState } from "../board";
import { getInitialBoard } from "../getInitialBoard";
import { reducer } from "../index";

const initialState: BoardState = getInitialBoard();

describe("test game reset", () => {
  test("returns the initialState if game is resetted", () => {
    expect(
      reducer(
        {
          board: [
            [null, null, null, null, null, "yellow", null],
            [null, null, null, null, null, "red", null],
            [null, null, null, null, null, "yellow", null],
            [null, null, null, null, null, "red", null],
            [null, null, null, null, null, "yellow", null],
            [null, null, null, null, null, "red", null],
          ],
        },
        {
          type: "RESET",
        }
      )
    ).toEqual({ board: initialState, wins: { red: 0, yellow: 0 } });
  });
});
