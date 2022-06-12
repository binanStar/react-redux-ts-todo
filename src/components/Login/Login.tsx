import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/userActions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./style.scss";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { userId } = useAppSelector((state) => state.user);

    const handleLogin = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        dispatch(login(username, password));
    };

    useEffect(() => {
        if (userId) {
            navigate("/");
        }
    }, [navigate, userId]);

    return (
        <form className="login-section" onSubmit={handleLogin}>
            <h2>Login</h2>
            <div className="info">
                <p>
                    We are mocking the credentials here to demonstrate public
                    route. Please use the following credentials to login.
                </p>
                <ul>
                    <li>
                        Username: Any of [username_1, username_2 ......
                        username_10]
                    </li>
                    <li>Password: admin</li>
                </ul>
            </div>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
