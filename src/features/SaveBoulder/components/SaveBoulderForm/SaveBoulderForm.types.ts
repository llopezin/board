import React from "react";
import { submitState } from "@/hooks/useFormError/useFormError.types";

export interface SaveBoulderFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => submitState;
}
