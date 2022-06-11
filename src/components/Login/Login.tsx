import { useState } from "react";
import "./style.scss";

const VALID_USERNAME_LIST = [
    "username_1",
    "username_2",
    "username_3",
    "username_4",
    "username_5",
    "username_6",
    "username_7",
    "username_8",
    "username_9",
    "username_10",
];

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        if (VALID_USERNAME_LIST.includes(username) && password === "admin") {
            console.log("Login successful");
            const userId = username.split("_")[1];
            console.log("UserId: ", userId);
        }
    };

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
