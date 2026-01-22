'use server';

import { auth, clientAuth } from "@/lib/firebase/client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { LoginUserResponse } from "./loginUser.types";

export async function getUserWithEmailAndPassword(_state: LoginUserResponse, formData: FormData): Promise<LoginUserResponse> {
    try {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const userCredential = await signInWithEmailAndPassword(clientAuth, email, password)
        const token = await auth.createCustomToken(userCredential.user.uid);

        return { success: true, token };
    } catch (error) {
        console.error("Error logging in:", error);
        return {
            success: false,
            errors: { errors: "Authorization failed" }
        };
    }
}
