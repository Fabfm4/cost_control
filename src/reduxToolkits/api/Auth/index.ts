import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {loginPassword, loggedData, userLoggedData} from './index.d';

const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_API_KEY = process.env.SUPABASE_API_KEY || "";
const AUTH_PATH = process.env.AUTH_PATH || "";
const LOGIN_AUTH_PASS_PATH = process.env.LOGIN_AUTH_PASS_PATH || "";
const USER_AUTH_PATH = process.env.USER_AUTH_PATH || "";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: SUPABASE_URL + AUTH_PATH,
        prepareHeaders: (headers, { getState }) => {
            headers.set('apikey', SUPABASE_API_KEY);
        }
    }),
    endpoints: (builder) => ({
        login: builder.mutation<loggedData, loginPassword>({
            query: (data) => ({
                url: LOGIN_AUTH_PASS_PATH,
                method: 'POST',
                body: data
            }),
        }),
        getUser: builder.query<userLoggedData, string>({
            query: (access_token) => ({
                url: USER_AUTH_PATH,
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + access_token},
            })
        }),
    }),
});

export const { useLoginMutation, useLazyGetUserQuery } = authApi