import holdStyles from "../styles";
import { ActivateHoldsArgs, HoldTypes, ToggleHoldActions } from "../types";
import holdSelector from "./holdSeletor";

function toggleHolds(
  { holdIds, holdType, boardRef }: ActivateHoldsArgs,
  action: ToggleHoldActions
) {
  const boardElement = boardRef.current;
  if (!boardElement) return;

  const classes = holdStyles[holdType as HoldTypes];
  const board = boardRef.current;

  holdIds.forEach((holdId) => {
    const holdElement = board?.querySelector(holdSelector(holdId));
    holdElement?.classList[action](...classes);
  });
}

function activateHolds(args: ActivateHoldsArgs) {
  toggleHolds(args, ToggleHoldActions.ACTIVATE);
}

function deactivateHolds(args: ActivateHoldsArgs) {
  toggleHolds(args, ToggleHoldActions.DEACTIVATE);
}

export { activateHolds, deactivateHolds };
