import { CreateUserResponse } from "../../actions/login-user/loginUser.types";

export const initialState: CreateUserResponse = {
    errors: { errors: [] },
    success: false,
};
