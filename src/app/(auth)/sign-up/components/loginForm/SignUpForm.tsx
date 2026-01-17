"use client";

import ErrorBlock from "@/components/common/ErrorBlock/ErrorBlock";
import { Spinner } from "@/components/common/Spinner/Spinner";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import Form from "@/components/ui/Form/Form";
import TextInput from "@/components/ui/TextInput/TextInput";
import { routes } from "@/constants/routes";
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

    const errors = !state.success ? state.errors : undefined;

    return (
        <Form className="w-full max-w-sm" action={formAction}>
            <TextInput
                className="text-stone-800"
                label="User name"
                name="displayName"
                type="text"
                placeholder="Enter your user name"
                required
            />

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
                minLength={8}
                required
            />

            {!!errors?.errors?.length && <ErrorBlock errors={[errors.errors].flat()} />}

            <SubmitButton disabled={pending}>
                {pending ? <Spinner className="max-h-6 max-w-6" /> : "Login"}
            </SubmitButton>
        </Form>
    );
}
