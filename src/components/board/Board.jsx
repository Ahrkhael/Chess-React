import React, { useState } from "react";
import "./board.css";
//import RowBoard from "../rowBoard/RowBoard";
import Square from "../square/Square";
import { getLegalMoves } from "../../utils/legalMoves";
import { initialBoard } from "../../constants/StartGame";

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

    // Cambiamos el turno
    if (turn === "white") {
      setTurn("black");
    } else {
      setTurn("white");
    }

    getLegalMoves(newBoard, turn);

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
