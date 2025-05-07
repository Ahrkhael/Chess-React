/*
 * Function to get the movements for the knights
 * @param {string} piece Letter which represents the chess piece
 * @param {object} squareOrigin Pair { row, col } of the square where the piece is moving from
 * @param {array} board Actual board before the movement
 * @return {array} moves All the possible moves until that moment
 */
export const getKnightMovements = (piece, squareOrigin, board) => {
  const moves = [];
  console.log(pieceColorSquare(piece));
  console.log(squareOrigin.row, "---", squareOrigin.col);
  console.log(pieceColorSquare(board[squareOrigin.row][squareOrigin.col]));
  if (squareOrigin.row === 0) {
    console.log("patata");
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
