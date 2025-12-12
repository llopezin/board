import { HoldTypes } from "@/components/Board/types";

export interface HoldTypeSelectorProps {
  activeType: HoldTypes;
  setActiveType: (type: HoldTypes) => void;
}
