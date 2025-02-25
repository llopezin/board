type BoardProps = {
    onClick: (event: React.MouseEvent<SVGElement>) => void;
    boulder?: Boulder;
};

type HoldId = string;

type Boulder = {
    [HoldTypes.TOP]: [HoldId] | [HoldId, HoldId],
    [HoldTypes.START]: [HoldId] | [HoldId, HoldId],
    [HoldTypes.HAND]: Array<HoldId>,
}

enum HoldTypes {
    START = 'start',
    TOP = 'top',
    HAND = 'hand'
}

type PaintBoulderOnBoardArgs = {
    boardRef: React.RefObject<HTMLDivElement | null>,
    boulder: Boulder
}

export type { BoardProps, HoldId, Boulder, PaintBoulderOnBoardArgs };
export { HoldTypes };

