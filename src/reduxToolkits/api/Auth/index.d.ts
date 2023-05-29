export interface loginPassword {
    email: string;
    password: string;
};
export interface loginToken {
    refresh_token: string;
};
export interface verifyToken {
    access_token?: string;
    refresh_token?: string;
};

interface userLoggedData {
    id: string;
    email: string;
};

export interface loggedData {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    user: userLoggedData;
};