import React from "react";
import "./board.css";
import RowBoard from "../rowBoard/RowBoard";

export default function Board() {
  const rows = [];
  for (let i = 0; i < 8; i++) {
    rows.push(<RowBoard key={i} row={i + 1} />);
    if((i + 1) % 8 === 0) {
      rows.push(<br key={`br-${i}`} />);
    }
  }
  return (
    <div id="board">
      {rows}
    </div>
  );
}