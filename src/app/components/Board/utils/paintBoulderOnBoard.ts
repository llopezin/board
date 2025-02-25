import { HoldId, HoldTypes } from '@/app/components/Board/types';
import { PaintBoulderOnBoardArgs } from "../types";
import holdStyles from '../styles';

function paintBoulderOnBoard({ boardRef, boulder }: PaintBoulderOnBoardArgs) {
    if (!boardRef.current) return;

    const board = boardRef.current;
    const boulderEntries = Object.entries(boulder);
    const holdSelector = (id: HoldId) => `[data-hold-id="${id}"]`;

    for (const [holdType, holdIds] of boulderEntries) {
        holdIds.forEach(id => {
            const holdElement = board.querySelector(holdSelector(id));
            const classes = holdStyles[holdType as HoldTypes];

            holdElement?.classList.add(...classes);
        }
        );
    }
}

export default paintBoulderOnBoard;