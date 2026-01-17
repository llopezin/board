import { z } from "zod";

export const LoginSchema = z.object({
    displayName: z.string().min(2, "Username must be at least 2 characters long"),
    email: z.email(),
    password: z.string().min(8, "Password must be at least 8 characters long"),
});
