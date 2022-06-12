import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BallTriangle } from "react-loader-spinner";
import ReactTooltip from "react-tooltip";
import {
    deleteTodoList,
    updateTodoList,
} from "../../../redux/actions/todoActions";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { TodoType } from "../../../redux/reducers/todoReducer";

interface TodoObjInterface {
    id: number;
    title: string;
    completed: boolean;
}

interface Props {
    todoObject: TodoObjInterface;
}

const TodoItem: React.FC<Props> = ({ todoObject }) => {
    const [isLoading, setIsLoading] = useState(false);

    const { id, title, completed } = todoObject;

    const dispatch = useAppDispatch();
    const { userId } = useAppSelector((state) => state.user);

    const handleDeleteTodo = async () => {
        setIsLoading(true);
        await dispatch(deleteTodoList(id));
        setIsLoading(false);
    };

    const handleUpdateTodo = async () => {
        const payload: TodoType = {
            id,
            title,
            completed: !completed,
            userId,
        };
        setIsLoading(true);
        await dispatch(updateTodoList(payload));
        setIsLoading(false);
    };

    return (
        <div className="todo-list">
            <input type="text" readOnly className="input-field" value={title} />

            {isLoading ? (
                <BallTriangle
                    height="1.5em"
                    width="1.5em"
                    color="grey"
                    ariaLabel="loading"
                />
            ) : (
                <>
                    <span
                        data-tip={`${
                            id > 200
                                ? "The mock api does not support update operation to newly created item. Please try with the default ones."
                                : `Mark "${title}" as ${
                                      completed ? "Todo" : "Done"
                                  }`
                        }`}
                        data-for="toggleTip"
                    >
                        <input
                            type="checkbox"
                            className="checkbox"
                            defaultChecked={completed}
                            disabled={id > 200}
                            onClick={handleUpdateTodo}
                        />
                    </span>

                    <AiOutlineDelete
                        className="remove-icon"
                        data-tip={`Delete "${title}" from the list`}
                        data-for="deleteTip"
                        onClick={handleDeleteTodo}
                    />
                </>
            )}

            <ReactTooltip id="deleteTip" place="top" effect="solid" />
            <ReactTooltip id="toggleTip" place="top" effect="solid" />
        </div>
    );
};

export default TodoItem;
