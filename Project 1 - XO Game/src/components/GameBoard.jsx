const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard() {
  return (
    <ol id="game-board">
      {initialGameBoard.map((eachRow, eachRowIdx) => (
        <li key={eachRowIdx}>
          <ol>
            {eachRow.map((playerSymbol, colIdx) => (
              <li key={colIdx}><button>{playerSymbol}</button></li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
