"use client";

import { cn } from "@/utils/cn";
import { useEffect, useRef } from "react";
import BoardMap from "./components/BoardMap/BoardMap";
import { BoardProps } from "./types";
import paintBoulder from "./utils/paintBoulder";

function Board({ onClick, boulder, className }: BoardProps) {
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const noBoulderPaintedYet = boulder && boardRef.current;

    if (noBoulderPaintedYet) {
      paintBoulder({ boardRef, boulder });
    };
  }, []);

  return (
    <>
      <div
        className={cn("h-full w-max bg-presas bg-contain bg-no-repeat border-b-2 border-stone-800 mx-auto", className)}
        ref={boardRef}
      >
        <BoardMap onClick={onClick} />
      </div>
    </>
  );
}

export default Board;
