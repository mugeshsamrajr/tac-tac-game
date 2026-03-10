import { useState } from "react";

const initialState = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialState());
  const [isXNext, setIsXNext] = useState(true);

  const WINNING_PATTERN = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [6, 4, 2],
    [1, 4, 7],
    [0, 1, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERN.length; i++) {
      const [a, b, c] = WINNING_PATTERN[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} Wins`;
    if (!board.includes(null)) return `Game is Draw`;
    return `Player ${isXNext ? "X" : "0"} Turn`;
  };

  const handleClick = (index) => {
    const winner = calculateWinner(board);

    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";

    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(initialState());
    setIsXNext(true);
  };

  return { board, calculateWinner, getStatusMessage, handleClick, resetGame };
};
export default useTicTacToe;
