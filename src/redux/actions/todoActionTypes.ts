import { TodoType } from "../reducers/todoReducer";

export const LOADING_START = "LOADING_START";
export const LOADING_END = "LOADING_END";
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";

interface LoadingStart {
    type: typeof LOADING_START;
}

interface LoadingEnd {
    type: typeof LOADING_END;
}

interface FetchTodoSuccess {
    type: typeof FETCH_TODO_SUCCESS;
    payload: TodoType[];
}

interface AddTodoSuccess {
    type: typeof ADD_TODO_SUCCESS;
    payload: TodoType;
}

interface DeleteTodoSuccess {
    type: typeof DELETE_TODO_SUCCESS;
    id: number;
}

interface UpdateTodoSuccess extends Omit<AddTodoSuccess, "type"> {
    type: typeof UPDATE_TODO_SUCCESS;
}

export type TodoDispatchType =
    | LoadingStart
    | LoadingEnd
    | FetchTodoSuccess
    | AddTodoSuccess
    | DeleteTodoSuccess
    | UpdateTodoSuccess;

export enum ResponseCode {
    OKAY = 200,
    CREATED = 201,
}
