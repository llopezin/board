"use client";

import { getUserWithEmailAndPassword } from "@/app/(auth)/log-in/actions/login-user/loginUser";
import ErrorBlock from "@/components/common/ErrorBlock/ErrorBlock";
import { Spinner } from "@/components/common/Spinner/Spinner";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import Form from "@/components/ui/Form/Form";
import TextInput from "@/components/ui/TextInput/TextInput";
import { routes } from "@/constants/routes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { initialState } from "./LoginForm.constants.";
import { LoginFormProps } from "./LoginForm.types";

export default function LoginForm({ onSuccess }: LoginFormProps) {
    const [state, formAction, pending] = useActionState(getUserWithEmailAndPassword, initialState);
    const router = useRouter();

    useEffect(() => {
        if (state.success) {
            onSuccess?.(state.token);
            router.push(routes.createBoulder);
        };
    }, [state]);

    const errors = !state.success ? state.errors : undefined;

    return (
        <Form className="w-full max-w-sm" action={formAction}>

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

            {!!errors?.errors?.length && <ErrorBlock errors={[errors.errors].flat()} />}

            <SubmitButton disabled={pending}>
                {pending ? <Spinner className="max-h-6 max-w-6" /> : "Login"}
            </SubmitButton>

            <p className="text-left">Don&apos;t have an account? <Link className="cursor-pointer hover:underline font-semibold" href={routes.signup}>Sign up here</Link></p>

        </Form>
    );
}
