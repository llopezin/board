import { GetBoulderReturn } from "../../services/getBoulders.types";

export type BoulderProps = {
  bouderDataRes: Promise<GetBoulderReturn>;
};
