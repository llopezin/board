type HoldId = string;
type TwoHoldIdsList = [] | [HoldId] | [HoldId, HoldId];
type BoardRef = React.RefObject<HTMLDivElement | null>;
type BoulderEntries = [HoldTypes, HoldId[]][];

type BoardProps = {
  onClick?: (event: React.MouseEvent<SVGElement>) => void;
  boulder?: Boulder;
};

type Boulder = {
  [HoldTypes.TOP]: TwoHoldIdsList;
  [HoldTypes.START]: TwoHoldIdsList;
  [HoldTypes.HAND]: Array<HoldId>;
  [HoldTypes.FOOT]: Array<HoldId>;
};

type PaintDifferenceArgs = {
  difference: Difference;
  boardRef: BoardRef;
};

type paintBoulderArgs = {
  boardRef: BoardRef;
  boulder: Boulder;
};

type ActivateHoldsArgs = {
  holdIds: string[];
  holdType: string;
  boardRef?: React.RefObject<HTMLDivElement | null>;
};

type HoldIdsDifference = {
  added: Array<HoldId>;
  removed: Array<HoldId>;
};

type Difference = {
  [HoldTypes.TOP]: HoldIdsDifference;
  [HoldTypes.START]: HoldIdsDifference;
  [HoldTypes.HAND]: HoldIdsDifference;
  [HoldTypes.FOOT]: HoldIdsDifference;
};

enum ToggleHoldActions {
  ACTIVATE = "add",
  DEACTIVATE = "remove",
}

enum HoldTypes {
  START = "start",
  HAND = "hand",
  FOOT = "foot",
  TOP = "top",
}

export type {
  ActivateHoldsArgs, BoardProps, Boulder, BoulderEntries, Difference, HoldId, HoldIdsDifference, paintBoulderArgs, PaintDifferenceArgs, TwoHoldIdsList
};

export { HoldTypes, ToggleHoldActions };

