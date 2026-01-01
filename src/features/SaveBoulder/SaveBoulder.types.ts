import { Boulder } from "../Board/types";
import { SaveBoulderFormState } from "./components/SaveBoulderForm/SaveBoulderForm.types";

export interface SaveBoulderProps {
  saveFn: (state: SaveBoulderFormState, formData: FormData) => Promise<SaveBoulderFormState>;
  boulder: Boulder
}
