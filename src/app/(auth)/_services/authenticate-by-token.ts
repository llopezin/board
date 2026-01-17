'use server';

import { clientAuth } from "@/lib/firebase/client";
import { signInWithCustomToken, User } from "firebase/auth";
import { cookies } from "next/headers";

/**
 * Retrieves the authenticated user from the current session.
 * It expects a 'accessToken' cookie to be present.
 * 
 * @returns {Promise<User | null>} The authenticated Firebase User or null if validation fails.
 */
export async function getAuthenticatedUser(): Promise<User | null> {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('accessToken');

        if (!token?.value) return null;


        const userCredential = await signInWithCustomToken(clientAuth, token.value);
        return userCredential.user;
    } catch (error) {
        console.error("Error authenticating user:", error);
        return null;
    }
}
