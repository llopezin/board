import { CreateUserResponse } from "../../actions/create-user/createUser.types";

export const initialState: CreateUserResponse = {
    errors: { errors: [] },
    success: false,
};
