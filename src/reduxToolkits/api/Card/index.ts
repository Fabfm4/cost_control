import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CardData, CardDataInsert } from './index.d';
import { SUPABASE_URL, SUPABASE_API_KEY, API_PATH, CARD_API } from '../constants';
import { RootState } from '@/reduxToolkits/store';

export const cardApi = createApi({
    reducerPath: 'cardApi',
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
        getCards: builder.query<CardData[], void>({
            query: () => CARD_API + '?select=*'
        }),
        getCard: builder.query<CardData, number>({
            query: (id) => CARD_API + `?id=eq.${id}&select=*`
        }),
        insertCard: builder.mutation<CardDataInsert, string>({
            query: (access_token) => ({
                url: CARD_API,
                method: 'POST',
            })
        }),
    }),
});

export const { useGetCardQuery, useGetCardsQuery } = cardApi;