import { LOGIN_SUCCESS } from "../actions/userActionTypes";

interface DefaultStateI {
    userId?: number;
}

const defaultState: DefaultStateI = {};

const userReducer = (state: DefaultStateI = defaultState, action: any) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { userId: action.userId }
        default:
            return state;
    }
};

export default userReducer;
