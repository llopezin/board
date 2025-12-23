export type useFormErrorArgs = {
    submitFn: (e: React.FormEvent<HTMLFormElement>) => submitState
}

export type submitState = { success: boolean; errors?: string[] }
