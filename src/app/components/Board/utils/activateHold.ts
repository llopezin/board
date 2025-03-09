import holdStyles from "../styles";
import { ActivateHoldArgs, HoldTypes, ToggleHoldActions } from "../types";
import holdSelector from "./holdSeletor";


function toggleHold({ holdId, holdType, boardRef }: ActivateHoldArgs, action: ToggleHoldActions) {
    const boardElement = boardRef.current;
    if (!boardElement) return;

    const classes = holdStyles[holdType as HoldTypes];
    const board = boardRef.current;
    const holdElement = board?.querySelector(holdSelector(holdId));
    holdElement?.classList[action](...classes);
}

function activateHold(args: ActivateHoldArgs) {
    toggleHold(args, ToggleHoldActions.ACTIVATE);
}

function deactivateHold(args: ActivateHoldArgs) {
    toggleHold(args, ToggleHoldActions.DEACTIVATE);
}

export { activateHold, deactivateHold };