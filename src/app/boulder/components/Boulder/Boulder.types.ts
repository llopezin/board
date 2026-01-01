import { GetBoulderReturn } from "../../services/getBoulder";

export type BoulderProps = {
  bouderDataRes: Promise<GetBoulderReturn>;
};
