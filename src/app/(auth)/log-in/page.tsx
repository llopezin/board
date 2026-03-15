"use client";

import useToken from "@/hooks/useToken/useToken";
import LoginForm from "./components/loginForm/LoginForm";

export default function LoginPage() {
    const { setToken } = useToken();

    const handleSuccess = (token: string) => {
        setToken(token);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white -mt-[10vh]">
            <LoginForm onSuccess={handleSuccess} />
        </div>
    );
}