import React from "react";
import "./board.css";
import RowBoard from "../rowBoard/RowBoard";

export default function Board() {
  const rows = [];
  for (let j = 0; j < 8; j++) {
    rows.push(<RowBoard key={j} row={j + 1} />);
    if((j + 1) % 8 === 0) {
      rows.push(<br key={`br-${j}`} />);
    }
  }
  
  return (
    <div id="board">
      {rows}
    </div>
  );
}