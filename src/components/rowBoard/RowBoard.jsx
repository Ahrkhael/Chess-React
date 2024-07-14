import React from "react";
import "./rowBoard.css";
import Square from "../square/Square";

export default function RowBoard({ row }) {
  const squares = [];
  for (let i = 0; i < 8; i++) {
    squares.push(<Square key={i} index={i + row} />);
  }
  return (
    <div className="row">
      {squares}
    </div>
  );
}