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
  const newBoard = board.map((row) => row.slice());

  const [turn, setTurn] = useState("white");

  const [squareSelected, setSquareSelected] = useState(null);

  const handleSquareClick = (row, col, piece) => {
    if (!squareSelected) {
      if (piece) {
        if (turn === "white") {
          if (piece === piece.toUpperCase()) {
            setSquareSelected({ row, col, piece });
          }
        } else {
          if (piece === piece.toLowerCase()) {
            setSquareSelected({ row, col, piece });
          }
        }
      }
    } else {
      // console.log(squareSelected, "----", row, "----", col, "----", piece);
      tryToMove(squareSelected, { row, col, piece });
      setSquareSelected(null);
    }
  };

  const tryToMove = (squareOrigin, squareDestiny) => {
    const pieceMoving = squareOrigin.piece;
    newBoard[squareOrigin.row][squareOrigin.col] = null;
    newBoard[squareDestiny.row][squareDestiny.col] = pieceMoving;

    if (turn === "white") {
      setTurn("black");
    } else {
      setTurn("white");
    }

    setBoard(newBoard);
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
