"use client";

import LoginForm from "./components/loginForm/LoginForm";
import { UserDto } from "@/domain/dtos/User.dto";

export default function LoginPage() {
    const handleSuccess = (user: UserDto, token: string) => {
        console.log("Login successful:", user, token);
        // Additional logic for success can be added here
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white">
            <h1 className="text-2xl font-bold mb-6">Login</h1>
            <LoginForm onSuccess={handleSuccess} />
        </div>
    );
}