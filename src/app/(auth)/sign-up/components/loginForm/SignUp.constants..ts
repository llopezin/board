import { CreateUserResponse } from "../../actions/create-user/createUser.types";

export const initialState: CreateUserResponse = {
    errors: { errors: [], properties: { password: { errors: [] }, email: { errors: [] }, displayName: { errors: [] } } },
    success: false,
};
