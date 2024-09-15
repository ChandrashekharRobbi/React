export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((eachRow, eachRowIdx) => (
        <li key={eachRowIdx}>
          <ol>
            {eachRow.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                <button
                  onClick={() => onSelectSquare(eachRowIdx, colIdx)}
                  disabled={playerSymbol != null}
                >
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
