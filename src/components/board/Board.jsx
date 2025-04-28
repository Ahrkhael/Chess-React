import React, { useState } from "react";
import "./board.css";
//import RowBoard from "../rowBoard/RowBoard";
import Square from "../square/Square";

// Tablero inicial con sus piezas
// Letras minúsculas piezas negras
// Letras mayúsculas piezas blancas
const initialBoard = [
  ["r", "n", "b", "q", "k", "b", "n", "r"],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
];

export default function Board() {
  const [board, setBoard] = useState(initialBoard);
  const [isSquareSelected, setSquareSelected] = useState(null);

  const handleSquareClick = (row, col, piece) => {
    if (!isSquareSelected) {
      if (piece) {
        console.log(isSquareSelected, "----", row, "----", col);
        setSquareSelected({ row, col, piece });
      }
    } else {
      console.log(isSquareSelected, "----", row, "----", col);
      //tryToMove(isSquareSelected, row, col)
      setSquareSelected(null);
    }
  };

  return (
    <div id="board">
      {board.map((rowArray, rowIdx) => (
        <div className="row" key={rowIdx}>
          {rowArray.map((piece, colIdx) => (
            <Square
              key={colIdx}
              rowIdx={rowIdx}
              colIdx={colIdx}
              piece={piece}
              onClick={handleSquareClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
