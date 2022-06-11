import TodoItem from './TodoItem';
import './style.scss';

const TodoList = () => {
    const todoList: any = [{id: 1, title: "Hello world", completed: false }]

    return (
        <div className="list-section">
            {todoList.map((todoObject: any) => {
                return <TodoItem key={todoObject.id} todoObject={todoObject} />;
            })}
        </div>
    );
};

export default TodoList;
