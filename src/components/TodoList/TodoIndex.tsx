import './style.scss';
import TodoInput from './TodoInput';
import TodoList from './TodoList/TodoList';

const TodoIndex = () => {
    return (
        <div className="todo-container">
            <TodoInput />
            <TodoList />
        </div>
    );
};

export default TodoIndex;
