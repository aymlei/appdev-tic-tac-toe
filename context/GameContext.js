import React, { createContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(Array(9).fill(null)); 
  const [currentPlayer, setCurrentPlayer] = useState("X"); 
  const [winner, setWinner] = useState(null); 

  const makeMove = (index) => {
    if (board[index] || winner) return; 

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const winnerPlayer = checkWinner(newBoard);
    if (winnerPlayer) {
      setWinner(winnerPlayer);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X"); 
    }
  };

  const checkWinner = (board) => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6], 
    ];
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null; 
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <GameContext.Provider value={{ board, currentPlayer, winner, makeMove, resetGame }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
