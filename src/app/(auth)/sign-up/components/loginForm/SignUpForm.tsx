"use client";

import ErrorBlock from "@/components/common/ErrorBlock/ErrorBlock";
import Spinner from "@/components/common/Spinner/Spinner";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import Form from "@/components/ui/Form/Form";
import TextInput from "@/components/ui/TextInput/TextInput";
import { routes } from "@/constants/routes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import createUser from "../../actions/create-user/createUser";
import { initialState } from "./SignUp.constants.";
import { SignUpFormProps } from "./SignUpForm.types";

export default function SignUpForm({ onSuccess }: SignUpFormProps) {
    const [state, formAction, pending] = useActionState(createUser, initialState);
    const router = useRouter();

    useEffect(() => {
        if (state.success) {
            onSuccess?.(state.token)
            router.push(routes.createBoulder);
        };
    }, [state]);

    const errors: string[] = [];

    if (!state.success) {
        const stateErrors = [state.errors.errors].flat();
        errors.push(...stateErrors);

        if (state.errors.properties) {
            const propertyErrors = Object.values(state.errors.properties).flatMap((p) => p.errors);
            errors.push(...propertyErrors);
        }
    }

    return (
        <Form className="w-full max-w-sm mx-auto" action={formAction}>
            <TextInput
                className="text-stone-800"
                label="Email*"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
            />
            {JSON.stringify({ state })}
            <TextInput
                className="text-stone-800"
                label="Name*"
                name="displayName"
                type="text"
                placeholder="Enter your name"
                required
            />

            <TextInput
                className="text-stone-800"
                label="Password*"
                name="password"
                type="password"
                minLength={8}
                required
            />

            {!!errors?.length && <ErrorBlock errors={errors} />}

            <SubmitButton disabled={pending}>
                {pending ? <Spinner className="max-h-6 max-w-6" /> : "Sign up"}
            </SubmitButton>

            <p className="text-left">Already have an account? <Link className="cursor-pointer hover:underline font-semibold" href={routes.login}>Login</Link></p>
        </Form>
    );
}
