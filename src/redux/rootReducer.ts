import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import todoReducer from "./reducers/todoReducer";

const RootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
});

export default RootReducer;
