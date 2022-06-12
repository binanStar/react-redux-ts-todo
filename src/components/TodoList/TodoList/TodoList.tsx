import { useAppSelector } from "../../../redux/hooks";
import "./style.scss";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const { todoList } = useAppSelector((state) => state.todo);

    return (
        <div className="list-section">
            {todoList.map((todoObject: any) => {
                return <TodoItem key={todoObject.id} todoObject={todoObject} />;
            })}
        </div>
    );
};

export default TodoList;
