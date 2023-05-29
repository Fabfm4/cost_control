import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DueMovesData, DueMovesInsert } from './index.d';
import { SUPABASE_URL, SUPABASE_API_KEY, API_PATH, DUE_MOVES_API } from '../constants';
import { RootState } from '@/reduxToolkits/store';

export const dueMovesApi = createApi({
    reducerPath: 'dueMovesApi',
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
        getDueMoves: builder.query<DueMovesData[], void>({
            query: () => DUE_MOVES_API + '?select=*'
        }),
        getDueMove: builder.query<DueMovesData, number>({
            query: (id) => DUE_MOVES_API + `?id=eq.${id}&select=*`
        }),
        insertDueMove: builder.mutation<DueMovesInsert, string>({
            query: (access_token) => ({
                url: DUE_MOVES_API,
                method: 'POST',
            })
        }),
    }),
});

export const { useGetDueMoveQuery, useGetDueMovesQuery } = dueMovesApi;