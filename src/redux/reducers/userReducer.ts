interface DefaultStateI {
    userId?: number;
}

const defaultState: DefaultStateI = {};

const userReducer = (state: DefaultStateI = defaultState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default userReducer;
