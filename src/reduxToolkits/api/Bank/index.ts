import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BankData, BankDataInsert } from './index.d';
import { SUPABASE_URL, SUPABASE_API_KEY, API_PATH, BANK_API } from '../constants';
import { RootState } from '@/reduxToolkits/store';

export const bankApi = createApi({
    reducerPath: 'bankApi',
    baseQuery: fetchBaseQuery({
        baseUrl: SUPABASE_URL + API_PATH,
        prepareHeaders: (headers, { getState }) => {
            headers.set('apikey', SUPABASE_API_KEY);
            const accessToken = (getState() as RootState).authUser.access_token || null;
            if (accessToken) {
                headers.set('Authorization', "Bearer " + accessToken);
            }
        }
    }),
    endpoints: (builder) => ({
        getBanks: builder.query<BankData[], void>({
            query: () => BANK_API + '?select=*'
        }),
        getBank: builder.query<BankData, number>({
            query: (id) => BANK_API + `?id=eq.${id}&select=*`
        }),
        insertBank: builder.mutation<BankDataInsert, string>({
            query: (access_token) => ({
                url: BANK_API,
                method: 'POST',
            })
        }),
    }),
});

export const { useGetBankQuery, useGetBanksQuery } = bankApi