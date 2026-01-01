import { Boulder } from "@/features/Board/types";

export interface SaveBoulderFormProps {
  saveFn: (state: SaveBoulderFormState, formData: FormData) => Promise<SaveBoulderFormState>;
  boulder: Boulder;
  onSuccess: () => void;
}

export type SaveBoulderFormState = {
  errors?: string[];
  success: boolean;
}