import { Boulder } from "@/features/Board/types";

export type BoulderListItemDto = {
  id: string;
  name: string;
  grade: string;
  boulder: Boulder;
};
