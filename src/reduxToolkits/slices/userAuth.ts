import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserLogged } from "./userAuth.d";

export const initialState: UserLogged = {
    access_token: undefined,
    refresh_token: "",
    isLoggedIn: false,
    expires_in: 0,
    token_type: "",
};

export const authUserSlice =  createSlice({
    name: "authUser",
    initialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<UserLogged>) => {
            return {...state, ...action.payload}
        }
    }
});

export const { setAccessToken } = authUserSlice.actions

export const selectAuthUser = (state: RootState) => state.authUser;

export default authUserSlice.reducer;