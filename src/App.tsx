import chessboardImage from "./assets/chessboardImage.svg";
import whiteBishop from "./assets/whitebishop.svg";
import thomasShelby from "./assets/thomasShelby.jpg";

import { useState } from "react";

function App() {
  const [chessboard, setChessboard] = useState<
    [[], [], [], [], [], [], [], []]
  >([[], [], [], [], [], [], [], []]);
  return (
    <>
      <div className="w-[900px] h-[900px] mx-auto ">
        <img
          src={chessboardImage}
          className="absolute w-[900px] h-[900px] -z-10"
        ></img>
        <div className="flex w-[900px] h-[900px] border-indigo-500 border-4 ">
          <div className="flex-col w-[112.5px] ">
            <div className="w-[112.5px] h-[112.5px] border-rose-500 border-2 "></div>
            <div className="w-[112.5px] h-[112.5px] border-rose-500 border-2 "></div>
            <div className="w-[112.5px] h-[112.5px] border-rose-500 border-2 "></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
