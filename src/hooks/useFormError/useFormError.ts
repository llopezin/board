// "use client";

// import { useState } from "react";
// import { useFormErrorArgs } from "./useFormError.types";

// export default function useFormError({ submitFn }: useFormErrorArgs) {
//     const [error, setError] = useState<string[] | null>(null);
//     const [pending, setPending] = useState(false);

//     const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         setPending(true);
//         const result = await submitFn(e);
//         if (result.errors) setError(result.errors);
//         setPending(false);
//     };

//     const clearError = () => setError(null);

//     return { error, onSubmit, clearError, pending };
// }