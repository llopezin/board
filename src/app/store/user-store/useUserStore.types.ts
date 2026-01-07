import { UserDto } from '@/domain/dtos/User.dto';

export type UserState = {
    user: UserDto | null;
    setUser: (user: UserDto | null) => void;
};
