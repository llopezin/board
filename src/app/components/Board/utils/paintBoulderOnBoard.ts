import { PaintBoulderOnBoardArgs } from "../types";
import { activateHold } from './activateHold';

function paintBoulderOnBoard({ boardRef, boulder }: PaintBoulderOnBoardArgs) {
    if (!boardRef.current) return;

    const boulderEntries = Object.entries(boulder);

    for (const [holdType, holdIds] of boulderEntries) {
        holdIds.forEach(id => activateHold({ holdId: id, holdType, boardRef })
        );
    }
}




export default paintBoulderOnBoard;