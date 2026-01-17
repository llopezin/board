import { UserDto } from "@/domain/dtos/User.dto";

export type CreateUserErrors = {
    errors: string | string[];
    properties?: {
        [key: string]: {
            errors: string[];
        };
    };
};

export type CreateUserResponse =
    | {
        success: true;
        user: UserDto;
        token: string;
    }
    | {
        success: false;
        errors: CreateUserErrors;
    };
