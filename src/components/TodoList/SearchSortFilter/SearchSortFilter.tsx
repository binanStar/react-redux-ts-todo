import { AiOutlineSearch } from "react-icons/ai";
import "./style.scss";

interface Props {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    filterParam: string;
    setFilterParam: React.Dispatch<React.SetStateAction<string>>;
    sortParam: string;
    setSortParam: React.Dispatch<React.SetStateAction<string>>;
}

const SearchSortFilter: React.FC<Props> = ({
    query,
    setQuery,
    filterParam,
    setFilterParam,
    sortParam,
    setSortParam,
}) => {
    return (
        <div className="search-sort-filter">
            <div className="search-div" id="search">
                <AiOutlineSearch className="remove-icon" />
                <input
                    type="text"
                    placeholder="Search your item"
                    className="search-input"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
            </div>

            <div className="sort-div">
                <select
                    value={sortParam}
                    onChange={(event) => setSortParam(event.target.value)}
                >
                    <option value="all">Sort by</option>
                    <option value="completed">Completed</option>
                    <option value="todo">Todo</option>
                </select>
            </div>

            <div className="filter-div">
                <select
                    value={filterParam}
                    onChange={(event) => setFilterParam(event.target.value)}
                >
                    <option value="all">Filter by</option>
                    <option value="completed">Completed</option>
                    <option value="todo">Todo</option>
                </select>
            </div>
        </div>
    );
};

export default SearchSortFilter;
