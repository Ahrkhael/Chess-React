import React from "react";
//import "./piece.css";

// Un map simple de tipo de pieza a la ruta de una imagen SVG/PNG
const pieceImages = {
  K: "/images/white-king.svg",
  Q: "/images/white-queen.svg",
  R: "/images/white-rook.svg",
  B: "/images/white-bishop.svg",
  N: "/images/white-knight.svg",
  P: "/images/white-pawn.svg",
  k: "/images/black-king.svg",
  q: "/images/black-queen.svg",
  r: "/images/black-rook.svg",
  b: "/images/black-bishop.svg",
  n: "/images/black-knight.svg",
  p: "/images/black-pawn.svg",
};

export default function Piece({ type }) {
  const src = pieceImages[type];
  const alt = `${type.toUpperCase()} piece`;
  return <img src={src} alt={alt} className="piece" />;
}
