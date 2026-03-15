"use client";

import useToken from "@/hooks/useToken/useToken";
import SignUpForm from "./components/loginForm/SignUpForm";

export default function LoginPage() {
    const { setToken } = useToken();

    const handleSuccess = (token: string) => {
        setToken(token);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white -mt-[10vh]">
            <SignUpForm onSuccess={handleSuccess} />
        </div>
    );
}