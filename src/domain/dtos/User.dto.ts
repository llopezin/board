export type UserDto = {
    uid: string;
    email: string;
    emailVerified: boolean;
    displayName: string;
    photoURL: string | null;
    phoneNumber: string | null;
    disabled: boolean;
    metadata: UserMetadata;
    providerData: UserInfo[];
    passwordHash: string | null;
    passwordSalt: string | null;
    tokensValidAfterTime: string;
    tenantId: string | null;
}

type UserMetadata = {
    creationTime: string;
    lastSignInTime: string | null;
    lastRefreshTime: string;
}

type UserInfo = {
    uid: string;
    displayName: string;
    email: string;
    photoURL: string | null;
    providerId: string;
    phoneNumber: string | null;
}
