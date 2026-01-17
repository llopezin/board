'use server';

import { clientAuth } from "@/lib/firebase/client";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function getUserWithEmailAndPassword(formData: FormData): Promise<{ token: string | null, error: Error | null }> {
    try {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const userCredential = await signInWithEmailAndPassword(clientAuth, email, password)
        const token = await userCredential.user.getIdToken();

        return { token, error: null };
    } catch (error) {
        console.error("Error authenticating user:", error);
        return { token: null, error: error as Error };
    }
}