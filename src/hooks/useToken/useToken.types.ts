export interface useTokenReturn {
    setToken: (token: string) => void;
    getToken: () => string | null;
    removeToken: () => void;
}
