import { getPawnMovements } from "../models/Pawn";

// Devuelve movimientos legales del tablero para uno de los jugadores
export const getLegalMoves = (board, turn) => {
  //console.log(board, "----", turn);
  const moves = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];
      if (piece && pieceColor(piece) === turn) {
        Array.prototype.push.apply(
          moves,
          movesForPiece(piece, { row, col }, board)
        );
      }
    }
  }
  console.table(moves);
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
 * @return {array} All the possible moves until that moment
 */
const movesForPiece = (piece, squareOrigin, board) => {
  if (piece.toLowerCase() === "p") {
    return getPawnMovements(piece, squareOrigin, board);
  }
};
