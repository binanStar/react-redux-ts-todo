import { LOGIN_SUCCESS, LOGIN_START, LOGIN_END } from "../actions/userActionTypes";

interface DefaultStateI {
    userId?: number;
    loading: boolean
}

const defaultState: DefaultStateI = {
    loading: false,
};

const userReducer = (state: DefaultStateI = defaultState, action: any) => {
    switch (action.type) {
        case LOGIN_START:
            return { ...state, loading: true }
        case LOGIN_END:
            return { ...state, loading: false }
        case LOGIN_SUCCESS:
            return { userId: action.userId, loading: false }
        default:
            return state;
    }
};

export default userReducer;
