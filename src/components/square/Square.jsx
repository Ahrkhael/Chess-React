import React from "react";
import "./square.css";
import Piece from "../piece/Piece";

export default function Square({ rowIdx, colIdx, piece }) {
  return (
    <div
      className="square"
      style={
        (colIdx + rowIdx) % 2 === 0
          ? { backgroundColor: "#DEB887" }
          : { backgroundColor: "#FFF8DC" }
      }
    >
      {piece && <Piece type={piece} />}
    </div>
  );
}
