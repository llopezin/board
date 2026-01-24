import { LoginUserResponse } from "../../actions/login-user/loginUser.types";

export const initialState: LoginUserResponse = {
    errors: { errors: [] },
    success: false,
};
