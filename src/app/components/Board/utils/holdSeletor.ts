import { HoldId } from "../types";

const holdSelector = (id: HoldId) => `[data-hold-id="${id}"]`;

export default holdSelector;
