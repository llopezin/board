"use client";

import { getUserWithEmailAndPassword } from "@/app/(auth)/_services/login-user";
import ErrorBlock from "@/components/common/ErrorBlock/ErrorBlock";
import { Spinner } from "@/components/common/Spinner/Spinner";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import Form from "@/components/ui/Form/Form";
import TextInput from "@/components/ui/TextInput/TextInput";
import { routes } from "@/constants/routes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LoginFormProps } from "./LoginForm.types";

export default function LoginForm({ onSuccess }: LoginFormProps) {
    const router = useRouter();
    const [state, setState] = useState<{
        pending: boolean;
        success: boolean;
        error: Error | null;
    }>({
        pending: false,
        success: false,
        error: null,
    });

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        setState({ ...state, pending: true });

        const { error, token } = await getUserWithEmailAndPassword(formData);

        if (token) {
            setState({ ...state, pending: false, success: true });
            onSuccess?.(token);
        }

        if (error) {
            setState({ ...state, pending: false, error: error });
        }

    };

    useEffect(() => {
        if (state.success) {
            console.log('onSuccess: ', onSuccess);
            router.push(routes.createBoulder);
        };
    }, [state.success]);

    return (
        <Form className="w-full max-w-sm" onSubmit={onSubmit}>

            <TextInput
                className="text-stone-800"
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
            />

            <TextInput
                className="text-stone-800"
                label="Password"
                name="password"
                type="password"
                required
            />

            {state.error && <ErrorBlock errors={[state.error.message].flat()} />}

            <SubmitButton disabled={state.pending}>
                {state.pending ? <Spinner className="max-h-6 max-w-6" /> : "Login"}
            </SubmitButton>

            <Link href={routes.signup}>Sign up here</Link>

        </Form>
    );
}
