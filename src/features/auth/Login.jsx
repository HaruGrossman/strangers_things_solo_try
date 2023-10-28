//create a <Login> component as well with corresponding routes. It should be almost identical to <Register>
import { useState } from "react";
//update "login" to send credentials via respective mutation when the form is submitted. is successful, navigate the user back to home page
//use "unwrap" to catch the error- otherwise the user will always be redirected
//at this point, the token should be stored in state and sessionStorage on a successful registration or login. Confirm this by looking at the Redux DevTools and your browser inspector
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "./authSlice";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [login] = useLoginMutation();
    const tryLogin = async (event) => {
        event.preventDefault();
        const credentials = { username, password };
        try {
            await login(credentials).unwrap();
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={tryLogin}>
                <label>
                    Username
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target, value)}
                        autoComplete="username"
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                </label>
                <button>Login</button>
            </form>
        </>
    );
}

export default Login // now go and add this to navbar file and main.jsx