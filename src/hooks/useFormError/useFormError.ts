import { useState } from "react";
import { useFormErrorArgs } from "./useFormError.types";

export default function useFormError({ submitFn }: useFormErrorArgs) {
    const [error, setError] = useState<string[] | null>(null);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const result = submitFn(e);
        if (result.errors) setError(result.errors);
    };

    const clearError = () => setError(null);

    return { error, onSubmit, clearError };
}