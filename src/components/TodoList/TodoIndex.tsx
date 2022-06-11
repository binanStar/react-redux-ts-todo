import { useEffect } from "react";
import { fetchTodoList } from "../../redux/actions/todoActions";
import { useAppDispatch } from "../../redux/hooks";
import "./style.scss";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList/TodoList";

const TodoIndex = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTodoList());
    }, [dispatch]);

    return (
        <div className="todo-container">
            <TodoInput />
            <TodoList />
        </div>
    );
};

export default TodoIndex;
