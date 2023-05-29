import {UserLogged, PayloadUser } from './types';

export const ADD_USER_LOGGED: string = 'ADD_USER_LOGGED';
export const REMOVE_USER_LOGGED: string = 'REMOVE_USER_LOGGED';


export function addUserLogged(userInfo: UserLogged): PayloadUser  {
    return {
        type: ADD_USER_LOGGED,
        userInfo
    }
}

export function removeUserLogged(): PayloadUser  {
    return {
        type: REMOVE_USER_LOGGED,
    }
}