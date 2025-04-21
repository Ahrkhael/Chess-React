import React from "react";
import "./rowBoard.css";
import Square from "../square/Square";

export default function RowBoard({ rowIdx, rowArray }) {
  return (
    <div className="row">
      {rowArray.map((piece, colIdx) => (
        <Square key={colIdx} rowIdx={rowIdx} colIdx={colIdx} piece={piece} />
      ))}
    </div>
  );
}
