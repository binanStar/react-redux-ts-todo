import { toast } from "react-toastify";
import { TodoType } from "../reducers/todoReducer";

export const deleteTodoById = (todoList: TodoType[], id: number) => {
    const indexToDelete = todoList.findIndex((item) => item.id === id);
    if (indexToDelete > -1) {
        todoList.splice(indexToDelete, 1);
        toast.error("Item deleted");
    }
    return todoList;
};

export const updateTodoItem = (todoList: TodoType[], payload: TodoType) => {
    const indexToUpdate = todoList.findIndex((item) => item.id === payload.id);
    if (indexToUpdate > -1) {
        todoList[indexToUpdate] = payload;
        toast.success("Item updated");
    }
    return todoList;
};
