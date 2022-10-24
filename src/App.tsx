import chessboardImage from "./assets/chessboardImage.svg";
import greenchessboard from "./assets/greenchessboard.svg";
import secondgreenchessboard from "./assets/secondgreenchessboard.svg";
import woodenchessboard from "./assets/woodenchessboard.PNG";

import thomasShelby from "./assets/thomasShelby.jpg";

import {
  NothingPiece,
  WhitePawn,
  WhiteBishop,
  WhiteKnight,
  WhiteRook,
  WhiteQueen,
  WhiteKing,
  BlackPawn,
  BlackBishop,
  BlackKnight,
  BlackRook,
  BlackQueen,
  BlackKing,
} from "./components";

import { useState } from "react";

function App() {
  // Remember: pawn below i
  type PieceType = {
    src: JSX.Element;
  };

  const [chessboard, setChessboard] = useState<
    [
      [
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType
      ],
      [
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType
      ],
      [
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType
      ],
      [
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType
      ],
      [
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType
      ],
      [
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType
      ],
      [
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType
      ],
      [
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType,
        PieceType
      ]
    ]
  >([
    [
      { src: <BlackRook /> },
      { src: <BlackKnight /> },
      { src: <BlackBishop /> },
      { src: <BlackQueen /> },
      { src: <BlackKing /> },
      { src: <BlackBishop /> },
      { src: <BlackKnight /> },
      { src: <BlackRook /> },
    ],
    [
      { src: <BlackPawn /> },
      { src: <BlackPawn /> },
      { src: <BlackPawn /> },
      { src: <BlackPawn /> },
      { src: <BlackPawn /> },
      { src: <BlackPawn /> },
      { src: <BlackPawn /> },
      { src: <BlackPawn /> },
    ],
    [
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
    ],
    [
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
    ],
    [
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
    ],
    [
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
      { src: <NothingPiece /> },
    ],
    [
      { src: <WhitePawn /> },
      { src: <WhitePawn /> },
      { src: <WhitePawn /> },
      { src: <WhitePawn /> },
      { src: <WhitePawn /> },
      { src: <WhitePawn /> },
      { src: <WhitePawn /> },
      { src: <WhitePawn /> },
    ],
    [
      { src: <WhiteRook /> },
      { src: <WhiteKnight /> },
      { src: <WhiteBishop /> },
      { src: <WhiteQueen /> },
      { src: <WhiteKing /> },
      { src: <WhiteBishop /> },
      { src: <WhiteKnight /> },
      { src: <WhiteRook /> },
    ],
  ]);

  // const displayedChessBoard = chessboard.map((row, rowIndex: number) => {
  //   console.log(row)
  // });

  let example;
  let displayBoard = chessboard.map((row, rowIndex: number) => {
    return (
      <div className="flex h-[112.5px]">
        {row[0]?.src}
        {row[1]?.src}
        {row[2]?.src}
        {row[3]?.src}
        {row[4]?.src}
        {row[5]?.src}
        {row[6]?.src}
        {row[7]?.src}
      </div>
    );
  });

  console.log(displayBoard[1]);

  return (
    <>
      <div className="w-[900px] h-[900px] mx-auto ">
        <img
          src={secondgreenchessboard}
          className="absolute w-[900px] h-[900px] -z-10"
        ></img>
        <div className="flex-col w-[900px] h-[900px] border-indigo-500 border-4 ">
          {displayBoard[0]}
          {displayBoard[1]}
          {displayBoard[2]}
          {displayBoard[3]}
          {displayBoard[4]}
          {displayBoard[5]}
          {displayBoard[6]}
          {displayBoard[7]}
        </div>
      </div>
    </>
  );
}

export default App;

/*
example piece jsx code

<div className="flex h-[112.5px] border-red-600 border-2">
            {<Pawn />}
            {<Pawn />}
            {<Pawn />}
            {<Pawn />}
            {<Pawn />}
            {<Pawn />}
          </div>


*/
