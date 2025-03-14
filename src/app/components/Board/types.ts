type BoardProps = {
  onClick: (event: React.MouseEvent<SVGElement>) => void;
  boulder?: Boulder;
};

type HoldId = string;

type TwoHoldIdsList = [] | [HoldId] | [HoldId, HoldId];

type Boulder = {
  [HoldTypes.TOP]: TwoHoldIdsList;
  [HoldTypes.START]: TwoHoldIdsList;
  [HoldTypes.HAND]: Array<HoldId>;
};

enum HoldTypes {
  START = "start",
  TOP = "top",
  HAND = "hand",
}

type BoardRef = React.RefObject<HTMLDivElement | null>;

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
  boardRef: React.RefObject<HTMLDivElement | null>;
};

enum ToggleHoldActions {
  ACTIVATE = "add",
  DEACTIVATE = "remove",
}

type HoldIdsDifference = {
  added: Array<HoldId>;
  removed: Array<HoldId>;
};

type Difference = {
  [HoldTypes.TOP]: HoldIdsDifference;
  [HoldTypes.START]: HoldIdsDifference;
  [HoldTypes.HAND]: HoldIdsDifference;
};

export type {
  BoardProps,
  HoldId,
  Boulder,
  paintBoulderArgs,
  ActivateHoldsArgs,
  TwoHoldIdsList,
  Difference,
  PaintDifferenceArgs,
};
export { HoldTypes, ToggleHoldActions };
