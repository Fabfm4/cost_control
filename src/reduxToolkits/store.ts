import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authUserReducer from "./slices/userAuth";
import { authApi } from "./api/Auth";
import { bankApi } from "./api/Bank";
import { cardApi } from "./api/Card";
import { dueMovesApi } from "./api/DueMoves";
import { movesApi } from "./api/Moves";


export const store = configureStore({
    reducer: {
        authUser: authUserReducer,
        [authApi.reducerPath]: authApi.reducer,
        [bankApi.reducerPath]: bankApi.reducer,
        [cardApi.reducerPath]: cardApi.reducer,
        [dueMovesApi.reducerPath]: dueMovesApi.reducer,
        [movesApi.reducerPath]: movesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        authApi.middleware,
        bankApi.middleware,
        cardApi.middleware,
        dueMovesApi.middleware,
        movesApi.middleware,
    )
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch