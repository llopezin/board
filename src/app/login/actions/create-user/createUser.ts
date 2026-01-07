"use server";

import { auth } from "@/lib/firebase/client";
import { LoginSchema } from "../../validation/loginSchema";
import { z } from "zod";
import { UserDto } from "@/domain/dtos/User.dto";
import { CreateUserResponse } from "./createUser.types";



export default async function createUser(state: CreateUserResponse, formData: FormData): Promise<CreateUserResponse> {

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const displayName = formData.get("displayName") as string || undefined;
    const result = LoginSchema.safeParse({ email, password });

    if (!result.success) {
        return {
            errors: z.treeifyError(result.error),
            success: false,
        };
    }

    try {
        const res = await auth.createUser({
            email,
            password,
            displayName,
            emailVerified: false,
        })

        if (res.uid) {
            const token = await auth.createCustomToken(res.uid);
            const user = await auth.getUser(res.uid) as UserDto;

            return { success: true, user, token };
        } else throw new Error;

    } catch (error) {
        return {
            errors: { errors: "Something went wrong" },
            success: false,
        };
    }
}