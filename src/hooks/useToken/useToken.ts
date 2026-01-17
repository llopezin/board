"use client";

import Cookies from "js-cookie";
import { useTokenReturn } from "./useToken.types";

export default function useToken(): useTokenReturn {
    const TOKEN_KEY = 'accessToken';

    const setToken = (token: string): void => {
        Cookies.set(TOKEN_KEY, token, {
            path: '/',
            sameSite: 'strict',
            secure: true,
            expires: 7 // default to 7 days
        });
    };

    const getToken = (): string | null => {
        return Cookies.get(TOKEN_KEY) || null;
    };

    const removeToken = (): void => {
        Cookies.remove(TOKEN_KEY, { path: '/' });
    };

    return { setToken, getToken, removeToken };
}
