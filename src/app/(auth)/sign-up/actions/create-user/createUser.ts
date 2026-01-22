"use server";

import { UserDto } from "@/domain/dtos/User.dto";
import { auth } from "@/lib/firebase/client";
import { z } from "zod";
import { SignUpSchema } from "../../validation/signUpSchema";
import { CreateUserResponse } from "./createUser.types";

export default async function createUser(_state: CreateUserResponse, formData: FormData): Promise<CreateUserResponse> {

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const displayName = formData.get("displayName") as string;
    const result = SignUpSchema.safeParse({ email, password, displayName });

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
            const [token, user] = await Promise.all([
                auth.createCustomToken(res.uid),
                auth.getUser(res.uid),
            ]).catch(error => { throw error })

            return { success: true, user: user.toJSON() as UserDto, token };
        } else throw new Error('Missing uid');

    } catch (error) {
        console.error("Error creating user:", error);
        return {
            errors: { errors: "Sign up fail" },
            success: false,
        };
    }
}