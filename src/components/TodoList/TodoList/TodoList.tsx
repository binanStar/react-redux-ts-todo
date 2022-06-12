import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { useAppSelector } from "../../../redux/hooks";
import SearchSortFilter from "../SearchSortFilter/SearchSortFilter";
import { handleSearchSortFilter } from "../SearchSortFilter/utils";
import "./style.scss";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const { todoList, loading, lastModified } = useAppSelector(
        (state) => state.todo
    );

    const [query, setQuery] = useState("");
    const [filterParam, setFilterParam] = useState("all");
    const [sortParam, setSortParam] = useState("all");
    const [filteredTodo, setFilteredTodo] = useState(todoList);

    useEffect(() => {
        setFilteredTodo(
            handleSearchSortFilter(todoList, query, filterParam, sortParam)
        );
    }, [query, lastModified, filterParam, sortParam, todoList]);

    return (
        <>
            <SearchSortFilter
                {...{
                    query,
                    setQuery,
                    filterParam,
                    setFilterParam,
                    sortParam,
                    setSortParam,
                }}
            />

            {loading ? (
                <span style={{ marginTop: "2rem" }}>
                    <BallTriangle
                        height="3.5em"
                        width="3.5em"
                        color="grey"
                        ariaLabel="loading"
                    />
                </span>
            ) : (
                <div className="list-section">
                    {filteredTodo.map((todoObject: any) => {
                        return (
                            <TodoItem
                                key={todoObject.id}
                                todoObject={todoObject}
                            />
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default TodoList;
