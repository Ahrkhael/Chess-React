/*
 * Function to get the movements for the pawns
 * @param {string} piece Letter which represents the chess piece
 * @param {object} squareOrigin Pair { row, col } of the square where the piece is moving from
 * @param {array} board Actual board before the movement
 * @return {array} moves All the possible moves until that moment
 */
export const getKnightMovements = (piece, squareOrigin, board) => {
  const moves = [];
  if (pieceColorSquare(piece) === "black") {
    if (squareOrigin.row === 1) {
      if (pieceColorSquare(board[2][squareOrigin.col]) !== "white") {
        moves.push({ row: 2, col: squareOrigin.col });
      }
      if (pieceColorSquare(board[3][squareOrigin.col]) !== "white") {
        moves.push({ row: 3, col: squareOrigin.col });
      }
    } else if (
      pieceColorSquare(board[squareOrigin.row + 1][squareOrigin.col]) !==
      "white"
    ) {
      moves.push({ row: squareOrigin.row + 1, col: squareOrigin.col });
    }
  } else if (pieceColorSquare(piece) === "white") {
    if (squareOrigin.row === 6) {
      if (pieceColorSquare(board[5][squareOrigin.col]) !== "black") {
        moves.push({ row: 5, col: squareOrigin.col });
      }
      if (pieceColorSquare(board[4][squareOrigin.col]) !== "black") {
        moves.push({ row: 4, col: squareOrigin.col });
      }
    } else if (
      pieceColorSquare(board[squareOrigin.row - 1][squareOrigin.col]) !==
      "black"
    ) {
      moves.push({ row: squareOrigin.row - 1, col: squareOrigin.col });
    }
  }
  return moves;
};

/*
 * Function to get the player who control the piece of a square
 * @param {string} piece Letter which represents the chess piece
 * @return {string} "white" or "black" depending on the piece or null if other case
 */
const pieceColorSquare = (piece) => {
  if (piece === "n") {
    return "black";
  } else if (piece === "N") {
    return "white";
  } else {
    return null;
  }
};
