import cn from "classnames";
import React from "react";
import { connect } from "react-redux";
import { dropCoin } from "../actions/dropCoin";
import { reset } from "../actions/reset";
import { RootState } from "../reducers";
import { getBoard, getCurrentPlayer, getWinner } from "../reducers/selectors";
import { Color } from "../types";
import { Button } from "./Button";
import { Row } from "./Row";
import { Scoreboard } from "./Scoreboard";

interface Props {
  board: ReturnType<typeof getBoard>;
  color: ReturnType<typeof getCurrentPlayer>;
  winner: ReturnType<typeof getWinner>;
  dropCoin: typeof dropCoin;
  reset: typeof reset;
}

export class BoardComponent extends React.Component<Props> {
  dropCoin = (column: number) => () => {
    // we only allow a player to drop a coin if there is no winner yet
    if (!this.props.winner) {
      this.props.dropCoin(column, this.props.color);
    }
  };

  displayHeader() {
    // only display the winner if there is one
    if (this.props.winner) {
      return <h2>Congratulations, {this.props.winner.color} wins the game!</h2>;
    } else {
      return <h2>It's {this.props.color}'s turn to play</h2>;
    }
  }

  displayRow = (colors: Color[], key: number) => {
    return (
      <Row
        row={key}
        dropCoin={this.dropCoin}
        colors={colors}
        key={`column-${key}`}
        winner={this.props.winner}
      />
    );
  };

  reset = () => {
    this.props.reset();
  };

  displayActions() {
    // only display the button if the game has started
    if (this.props.winner) {
      return <Button onClick={this.reset}>Play Again</Button>;
    }
    return (
      <Button secondary onClick={this.reset}>
        Start Over
      </Button>
    );
  }

  render() {
    const classes = cn("Game-Board");

    return (
      <>
        {this.displayHeader()}

        <div className="Game">
          <div className={classes}>{this.props.board.map(this.displayRow)}</div>
        </div>

        <Scoreboard />

        {this.displayActions()}
      </>
    );
  }
}

const mapState = (state: RootState) => ({
  board: getBoard(state),
  color: getCurrentPlayer(state),
  winner: getWinner(state),
});

export const Board = connect(mapState, { dropCoin, reset })(BoardComponent);
