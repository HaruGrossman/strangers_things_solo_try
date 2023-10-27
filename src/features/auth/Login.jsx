//create a <Login> component as well with corresponding routes. It should be almost identical to <Register>

import { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <h1>Login</h1>
            <form>
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