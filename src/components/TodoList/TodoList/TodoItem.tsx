import { AiOutlineDelete } from "react-icons/ai";

interface TodoObjInterface {
    id: number;
    title: string;
    completed: boolean;
}

interface Props {
    todoObject: TodoObjInterface;
}

const TodoItem: React.FC<Props> = ({ todoObject }) => {
    const { title, completed } = todoObject;

    return (
        <div className="todo-list">
            <input type="text" readOnly className="input-field" value={title} />

            <input
                type="checkbox"
                className="checkbox"
                defaultChecked={completed}
            />

            <AiOutlineDelete
                className="remove-icon"
                data-tip="Deletes the todo from the list"
                data-for="deleteTip"
            />
        </div>
    );
};

export default TodoItem;
