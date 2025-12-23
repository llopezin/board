import { submitState } from "@/hooks/useFormError/useFormError.types";

export interface SaveBoulderProps {
  saveFn: (name: string, grade: string) => submitState;
}
