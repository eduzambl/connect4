import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setWin } from "../actions/setWin";
import { RootState } from "../reducers";
import { getWinner, getWins } from "../reducers/selectors";

export const ScoreboardComponent = ({ winner, wins, setWin }: any) => {
  useEffect(() => {
    if (winner) {
      setWin(winner.color);
    }
  }, [setWin, winner]);

  const getLabel = (wins: number) => {
    return wins === 1 ? `${wins} Win` : `${wins} Wins`;
  };

  return (
    <div className="Game-Scoreboard">
      <div className="Game-Scoreboard-Item">
        <div className="Game-Scoreboard-Item-Title">Red</div>
        <div>{getLabel(wins.red)}</div>
      </div>

      <div className="Game-Scoreboard-Item">
        <div className="Game-Scoreboard-Item-Title">Yellow</div>
        <div>{getLabel(wins.yellow)}</div>
      </div>
    </div>
  );
};

const mapState = (state: RootState) => ({
  wins: getWins(state),
  winner: getWinner(state),
});
export const ScoreBoard = connect(mapState, {
  setWin,
})(ScoreboardComponent);
