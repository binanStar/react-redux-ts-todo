import { useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { addTodoList, AddTodoPayload } from "../../redux/actions/todoActions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const InputSection = () => {
    const [title, setTitle] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { userId } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    const handleAddTodo = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        const payload: AddTodoPayload = {
            userId,
            title,
            completed: false,
        };
        event.preventDefault();
        setIsLoading(true);
        await dispatch(addTodoList(payload));
        setTitle("");
        setIsLoading(false);
    };

    return (
        <form className="input-section" onSubmit={handleAddTodo}>
            <input
                type="text"
                placeholder="Add a new task"
                className="input-field"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            {isLoading ? (
                <BallTriangle
                    height="1.5em"
                    width="1.5em"
                    color="grey"
                    ariaLabel="loading"
                />
            ) : (
                <button
                    type="button"
                    className="button"
                    disabled={title.length < 1}
                >
                    Add
                </button>
            )}
        </form>
    );
};

export default InputSection;
