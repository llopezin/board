"use client";

import { useActionState, useEffect } from "react";
import Form from "@/components/ui/Form/Form";
import TextInput from "@/components/ui/TextInput/TextInput";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import { Spinner } from "@/components/common/Spinner/Spinner";
import ErrorBlock from "@/components/common/ErrorBlock/ErrorBlock";
import createUser from "../../actions/create-user/createUser";
import { CreateUserResponse } from "../../actions/create-user/createUser.types";
import { LoginFormProps } from "./LoginForm.types";

const initialState: CreateUserResponse = {
    errors: { errors: [] },
    success: false,
};

export default function LoginForm({ onSuccess }: LoginFormProps) {
    const [state, formAction, pending] = useActionState(createUser, initialState);

    useEffect(() => {
        if (state.success && onSuccess) {
            onSuccess(state.user, state.token);
        }
    }, [state, onSuccess]);

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
