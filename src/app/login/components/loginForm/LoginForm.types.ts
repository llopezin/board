import { UserDto } from "@/domain/dtos/User.dto";

export interface LoginFormProps {
    onSuccess?: (user: UserDto, token: string) => void;
}
