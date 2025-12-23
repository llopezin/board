"use client";

import { useEffect, useRef } from "react";
import { BoardProps, Boulder } from "./types";
import paintBoulder from "./utils/paintBoulder";
import { activateHolds, deactivateHolds } from "./utils/activateHold";
import deepEqual from "@/utils/deepEqual";
import getDifference from "./utils/getDifference";
import BoardMap from "./components/BoardMap/BoardMap";

function Board({ onClick, boulder }: BoardProps) {
  const boardRef = useRef<HTMLDivElement>(null);
  const boulderRef = useRef<Boulder | null>(null);
  const board = boardRef?.current;
  const previousBoulder = boulderRef?.current;
  const boulderHasChanged =
    board && boulder && previousBoulder && !deepEqual(boulder, previousBoulder);

  if (boulderHasChanged) {
    const difference = getDifference(boulder, previousBoulder);

    for (const [holdType, differences] of Object.entries(difference)) {
      if (differences.removed.length)
        deactivateHolds({ holdIds: differences.removed, holdType, boardRef });

      if (differences.added.length)
        activateHolds({ holdIds: differences.added, holdType, boardRef });
    }

    boulderRef.current = boulder;
  }

  useEffect(() => {
    const noBoulderPaintedYet = boulder && boardRef.current && !previousBoulder;

    if (noBoulderPaintedYet) {
      paintBoulder({ boardRef, boulder });
      boulderRef.current = boulder;
    }
  }, []);

  return (
    <>
      <div
        className="h-full w-max bg-presas bg-contain bg-no-repeat pb-2"
        ref={boardRef}
      >
        <BoardMap onClick={onClick} />
      </div>
    </>
  );
}

export default Board;
