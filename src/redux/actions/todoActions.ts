import { Dispatch } from "redux";
import { TodoDispatchType, LOADING_START, LOADING_END } from "./todoActionTypes";

export const fetchTodoList =
    () => async (dispatch: Dispatch<TodoDispatchType>) => {
        dispatch({ type: LOADING_START });
        dispatch({ type: LOADING_END });
    };