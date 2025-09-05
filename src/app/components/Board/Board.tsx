"use client";

import { useRef } from "react";
import BoardMap from "../BoardMap/BoardMap";
import { BoardProps, Boulder } from "./types";
import paintBoulder from "./utils/paintBoulder";
import { activateHolds, deactivateHolds } from "./utils/activateHold";
import deepEqual from "@/app/utils/deepEqual";
import getDifference from "./utils/getDifference";

function Board({ onClick, boulder }: BoardProps) {
  const boardRef = useRef<HTMLDivElement>(null);
  const boulderRef = useRef<Boulder | null>(null);
  const board = boardRef?.current;
  const currentBoulder = boulderRef?.current;

  if (boulder && board && !currentBoulder) {
    paintBoulder({ boardRef, boulder });
    boulderRef.current = boulder;
  }

  if (
    board &&
    boulder &&
    currentBoulder &&
    !deepEqual(boulder, currentBoulder)
  ) {
    const difference = getDifference(boulder, currentBoulder);
    const diffEntries = Object.entries(difference);

    for (const [holdType, differences] of diffEntries) {
      if (differences.removed.length)
        deactivateHolds({ holdIds: differences.removed, holdType, boardRef });

      if (differences.added.length)
        activateHolds({ holdIds: differences.added, holdType, boardRef });
    }

    boulderRef.current = boulder;
  }

  return (
    <>
      <div
        className="h-[calc(100vh-120px)] w-max bg-presas bg-contain bg-no-repeat"
        ref={boardRef}
      >
        <BoardMap onClick={onClick} />
      </div>
    </>
  );
}

export default Board;
