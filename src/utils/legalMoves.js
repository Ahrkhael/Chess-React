// Devuelve movimientos legales del tablero
export const getLegalMoves = (board, turn) => {
  //console.log(board, "----", turn);
  const moves = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];
      if (piece && pieceColor(piece) === turn) {
        movesForPiece(piece, { row, col }, board, moves);
      }
    }
  }
  console.log(moves);
};

/*
 * Function to get the player who control that piece
 * @param {string} piece Letter which represents the chess piece
 * @return {string} "white" or "black" depending on the piece
 */
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

/*
 * Function to get the movements for a specific piece
 * @param {string} piece Letter which represents the chess piece
 * @param {object} squareOrigin Pair { row, col } of the square where the piece is moving from
 * @param {array} board Actual board before the movement
 * @param {array} moves All the possible moves until that moment
 */
const movesForPiece = (piece, squareOrigin, board, moves) => {
  if (piece.toLowerCase() === "p") {
    getPawnMovements(piece, squareOrigin, board, moves);
  }
};

/*
 * Function to get the movement for the pawns
 * @param {string} piece Letter which represents the chess piece
 * @param {object} squareOrigin Pair { row, col } of the square where the piece is moving from
 * @param {array} board Actual board before the movement
 * @param {array} moves All the possible moves until that moment
 */
const getPawnMovements = (piece, squareOrigin, board, moves) => {
  if (pieceColor(piece) === "black") {
    if (squareOrigin.row === 1) {
      moves.push({ row: 2, col: squareOrigin.col });
      moves.push({ row: 3, col: squareOrigin.col });
    } else {
      moves.push({ row: squareOrigin.row + 1, col: squareOrigin.col });
    }
  } else {
    if (squareOrigin.row === 6) {
      moves.push({ row: 5, col: squareOrigin.col });
      moves.push({ row: 4, col: squareOrigin.col });
    } else {
      moves.push({ row: squareOrigin.row - 1, col: squareOrigin.col });
    }
  }
};
