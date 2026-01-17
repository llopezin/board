"use client";

import useToken from "@/hooks/useToken/useToken";
import SignUpForm from "./components/loginForm/SignUpForm";

export default function LoginPage() {
    const { setToken } = useToken();

    const handleSuccess = (token: string) => {
        setToken(token);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white">
            <h1 className="text-2xl font-bold mb-6">Sign up</h1>
            <SignUpForm onSuccess={handleSuccess} />
        </div>
    );
}