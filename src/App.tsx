import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import Login from "./components/Login/Login";
import TodoList from "./components/TodoList/TodoIndex";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TodoList />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>

            <ToastContainer />
        </div>
    );
};

export default App;
