export const getLegalMoves = (board, turn) => {
  //console.log(board, "----", turn);
  const moves = [];
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const piece = board[r][c];
      if (piece && pieceColor(piece) === turn) {
        console.log(piece);
      }
    }
  }
};

const pieceColor = (piece) => {
  if (
    piece === "k" ||
    piece === "q" ||
    piece === "r" ||
    piece === "n" ||
    piece === "b" ||
    piece === "p"
  ) {
    return "black";
  } else {
    return "white";
  }
};

const movesForPiece = (piece, row, col, board) => {};
