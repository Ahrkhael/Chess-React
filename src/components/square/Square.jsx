import React from "react";
import "./square.css";
import Piece from "../piece/Piece";

export default function Square({ rowIdx, colIdx, piece, onClick }) {
  return (
    <div
      className="square"
      style={
        (colIdx + rowIdx) % 2 === 0
          ? { backgroundColor: "#DEB887" }
          : { backgroundColor: "#FFF8DC" }
      }
      onClick={() => onClick(rowIdx, colIdx, piece)}
    >
      {piece && <Piece type={piece} />}
    </div>
  );
}
