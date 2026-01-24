export type LoginUserErrors = {
    errors: string | string[];
};

export type LoginUserResponse =
    | {
        success: true;
        token: string;
    }
    | {
        success: false;
        errors: LoginUserErrors;
    };
