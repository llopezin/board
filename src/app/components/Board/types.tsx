type BoardProps = {
    onClick: (event: React.MouseEvent<SVGElement>) => void;
    boulder?: Boulder;
};

type HoldId = string;

type TwoHoldIdsList = [HoldId] | [HoldId, HoldId]

type Boulder = {
    [HoldTypes.TOP]: TwoHoldIdsList,
    [HoldTypes.START]: TwoHoldIdsList,
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

type ActivateHoldArgs = {
    holdId: string;
    holdType: string;
    boardRef: React.RefObject<HTMLDivElement | null>;
}

enum ToggleHoldActions {
    ACTIVATE = 'add',
    DEACTIVATE = 'remove'
}

export type { BoardProps, HoldId, Boulder, PaintBoulderOnBoardArgs, ActivateHoldArgs, TwoHoldIdsList };
export { HoldTypes, ToggleHoldActions };

