import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchTodoList } from "../../redux/actions/todoActions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./style.scss";
import TodoInput from "./TodoInput/TodoInput";
import TodoList from "./TodoList/TodoList";

const TodoIndex = () => {
    const userId = useAppSelector((state) => state.user.userId);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userId) {
            navigate("/login");
            return;
        }

        dispatch(fetchTodoList(userId));
    }, [dispatch, navigate, userId]);

    return (
        <div className="todo-container">
            <TodoInput />
            <TodoList />
        </div>
    );
};

export default TodoIndex;
