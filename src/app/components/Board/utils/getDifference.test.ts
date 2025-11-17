import { expect, test } from "vitest";
import { HoldTypes, TwoHoldIdsList } from "../types";
import getDifference from "./getDifference";

const currentBoulder = {
  [HoldTypes.TOP]: ["1"] as TwoHoldIdsList,
  [HoldTypes.START]: ["7"] as TwoHoldIdsList,
  [HoldTypes.HAND]: ["8", "9", "0"],
};

const boulder1 = {
  [HoldTypes.TOP]: ["1", "2"] as TwoHoldIdsList,
  [HoldTypes.START]: ["7"] as TwoHoldIdsList,
  [HoldTypes.HAND]: ["8", "9", "0"],
};

const boulder2 = {
  [HoldTypes.TOP]: ["1"] as TwoHoldIdsList,
  [HoldTypes.START]: [] as TwoHoldIdsList,
  [HoldTypes.HAND]: ["8", "9", "0"],
};

test("GetDifference: detects when a hold is added", () => {
  const diff = getDifference(boulder1, currentBoulder);

  Object.entries(diff).forEach(([type, values]) => {
    if (type === HoldTypes.TOP) {
      expect(values.added[0]).toBe("2");
      expect(values.removed.length).toBe(0);
    } else {
      expect(values.added.length).toBe(0);
      expect(values.removed.length).toBe(0);
    }
  });
});

test("GetDifference: detects when a hold is removed", () => {
  const diff = getDifference(boulder2, currentBoulder);

  Object.entries(diff).forEach(([type, values]) => {
    if (type === HoldTypes.START) {
      expect(values.removed[0]).toBe("7");
      expect(values.added.length).toBe(0);
    } else {
      expect(values.added.length).toBe(0);
      expect(values.removed.length).toBe(0);
    }
  });
});
