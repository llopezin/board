import { HoldTypes } from "@/features/Board/types";

export interface HoldTypeSelectorProps {
  activeType: HoldTypes;
  setActiveType: (type: HoldTypes) => void;
}
