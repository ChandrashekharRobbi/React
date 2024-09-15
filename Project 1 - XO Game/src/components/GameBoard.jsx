const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
	let gameBoard = initialGameBoard;

	for(const turn of turns) {
		const { square, player } = turn;
		const {row, col} = square;

		gameBoard[row][col] = player;
	}
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(eachRowIdx, colIdx) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedGameBoard[eachRowIdx][colIdx] = activePlayerSymbol;
  //     return updatedGameBoard;
  //   });

	// 	onSelectSquare();
  // }
  return (
    <ol id="game-board">
      {gameBoard.map((eachRow, eachRowIdx) => (
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
