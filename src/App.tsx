import "./App.scss";
import TodoList from "./components/TodoList/TodoIndex";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TodoList />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
