import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare , activePlayerSymbol}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(eachRowIdx, colIdx) {
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedGameBoard[eachRowIdx][colIdx] = activePlayerSymbol;
      return updatedGameBoard;
    });

		onSelectSquare();
  }
  return (
    <ol id="game-board">
      {gameBoard.map((eachRow, eachRowIdx) => (
        <li key={eachRowIdx}>
          <ol>
            {eachRow.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                <button onClick={() => handleSelectSquare(eachRowIdx, colIdx)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
