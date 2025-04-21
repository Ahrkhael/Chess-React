import React, { useState } from "react";
import "./board.css";
import RowBoard from "../rowBoard/RowBoard";

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

  return (
    <div id="board">
      {board.map((rowArray, rowIdx) => (
        <RowBoard key={rowIdx} rowIdx={rowIdx} rowArray={rowArray} />
      ))}
    </div>
  );
}
