import axios from "axios";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import { TodoType } from "./../reducers/todoReducer";
import {
    ADD_TODO_SUCCESS,
    DELETE_TODO_SUCCESS,
    FETCH_TODO_SUCCESS,
    LOADING_END,
    LOADING_START,
    ResponseCode,
    TodoDispatchType,
    UPDATE_TODO_SUCCESS,
} from "./todoActionTypes";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodoList =
    (userId: number) => async (dispatch: Dispatch<TodoDispatchType>) => {
        const id = toast.loading("Fetching data. Please wait...");

        dispatch({ type: LOADING_START });

        try {
            // Intentional delay for nicer transition
            setTimeout(async () => {
                const response = await axios.get(
                    `${API_BASE_URL}?userId=${userId}`
                );
                if (response && response.status === ResponseCode.OKAY) {
                    toast.update(id, {
                        render: "Data fetched successfully",
                        type: "success",
                        isLoading: false,
                        autoClose: 2000,
                    });
                    dispatch({
                        type: FETCH_TODO_SUCCESS,
                        payload: response.data,
                    });
                }
            }, 1500);
        } catch (err) {
            toast.update(id, {
                render: "Failed while fetching data. Please refresh again.",
                type: "success",
                isLoading: false,
                autoClose: 2000,
            });
        }

        dispatch({ type: LOADING_END });
    };

export interface AddTodoPayload {
    userId: number;
    title: string;
    completed: boolean;
}

export const addTodoList =
    (payload: AddTodoPayload) =>
    async (dispatch: Dispatch<TodoDispatchType>) => {
        dispatch({ type: LOADING_START });

        try {
            const response = await axios.post(API_BASE_URL, payload);
            if (response.status === ResponseCode.CREATED) {
                toast.success("New item added");
                dispatch({ type: ADD_TODO_SUCCESS, payload: response.data });
            }
        } catch (err) {
            toast.error("Add new item failed. Try again.");
        }

        dispatch({ type: LOADING_END });
    };

export const deleteTodoList =
    (id: number) => async (dispatch: Dispatch<TodoDispatchType>) => {
        dispatch({ type: LOADING_START });

        try {
            const response = await axios.delete(`${API_BASE_URL}/${id}`);
            if (response.status === ResponseCode.OKAY) {
                dispatch({ type: DELETE_TODO_SUCCESS, id });
            }
        } catch (err) {
            toast.error("Delete item failed. Try again.");
        }

        dispatch({ type: LOADING_END });
    };

export const updateTodoList =
    (payload: TodoType) => async (dispatch: Dispatch<TodoDispatchType>) => {
        dispatch({ type: LOADING_START });

        try {
            const response = await axios.put(
                `${API_BASE_URL}/${payload.id}`,
                payload
            );
            if (response.status === ResponseCode.OKAY) {
                dispatch({ type: UPDATE_TODO_SUCCESS, payload });
            }
        } catch (err) {
            toast.error("Update item failed. Try again.");
        }

        dispatch({ type: LOADING_END });
    };
