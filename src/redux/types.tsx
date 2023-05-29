
export interface UserLogged {
    accessToken: string;
    userId: string;
    email: string;
    name: string;
}

export type PayloadUser = {
    type: string;
    userInfo?: UserLogged
};
