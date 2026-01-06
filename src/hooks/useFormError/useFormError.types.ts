export type useFormErrorArgs = {
    submitFn: (e: React.FormEvent<HTMLFormElement>) => Promise<submitState>
}

export type submitState = { success: boolean; errors?: string[] }
