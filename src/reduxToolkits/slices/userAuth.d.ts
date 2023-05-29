
interface userInfo {
    id: string;
    email: string;
};

export interface UserLogged {
    access_token?: string;
    refresh_token?: string;
    expires_in?: number;
    token_type?: string;
    isLoggedIn: boolean;
    user?: userInfo
}