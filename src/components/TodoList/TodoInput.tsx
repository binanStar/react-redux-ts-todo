import { useState } from "react";

const InputSection = () => {
    const [title, setTitle] = useState("");

    return (
        <form className="input-section">
            <input
                type="text"
                placeholder="Add a new task"
                className="input-field"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <button type="button" className="button">
                Add
            </button>
        </form>
    );
};

export default InputSection;
