
"use client";

import { useRef } from "react";
import BoardMap from "../BoardMap/BoardMap";
import { BoardProps } from "./types";
import paintBoulderOnBoard from "./utils/paintBoulderOnBoard";


function Board({ onClick, boulder }: BoardProps) {
    const boardRef = useRef<HTMLDivElement>(null);

    if (boulder && boardRef) paintBoulderOnBoard({ boardRef, boulder });

    console.log('boulder: ', boulder);
    return (
        <>
            <div className="h-auto w-screen bg-presas bg-contain bg-no-repeat" ref={boardRef}>
                <BoardMap onClick={onClick} />
            </div>
        </>
    )
}


export default Board