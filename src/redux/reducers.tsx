
import { UserLogged, PayloadUser } from './types';
import { ADD_USER_LOGGED, REMOVE_USER_LOGGED } from './actions';

const initialState: UserLogged = {
    accessToken: "",
    userId: "",
    email: "",
    name: ""
};

const reducer = (state = initialState, action: PayloadUser) => {
    switch (action.type) {
        case ADD_USER_LOGGED:
            return {...state, ...action.userInfo};
        case REMOVE_USER_LOGGED:
            return {...state, ...initialState};
        default:
            return state;
    };
}

export default reducer;