import React, { useState } from "react";
import useTicTacToe from "../hooks/useTicTacToe";

function TicTacToe() {
  const { board, calculateWinner, getStatusMessage, handleClick, resetGame } =
    useTicTacToe();

  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="reset-btn" onClick={() => resetGame()}>
          Reset
        </button>
      </div>
      <div className="board">
        {board.map((b, index) => (
          <button
            className="cell"
            key={index}
            onClick={() => handleClick(index)}
            disabled={b !== null}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TicTacToe;
