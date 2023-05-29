import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MovesData, MovesInsert } from './index.d';
import { SUPABASE_URL, SUPABASE_API_KEY, API_PATH, MOVES_API } from '../constants';
import { RootState } from '@/reduxToolkits/store';

export const movesApi = createApi({
    reducerPath: 'movesApi',
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
        getMoves: builder.query<MovesData[], void>({
            query: () => MOVES_API + '?select=*'
        }),
        getMove: builder.query<MovesData, number>({
            query: (id) => MOVES_API + `?id=eq.${id}&select=*`
        }),
        insertMove: builder.mutation<MovesInsert, string>({
            query: (access_token) => ({
                url: MOVES_API,
                method: 'POST',
            })
        }),
    }),
});

export const { useGetMoveQuery, useGetMovesQuery } = movesApi;