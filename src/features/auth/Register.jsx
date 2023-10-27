//create a new <Register> component. Add a /register route tot he router in main.jsx, as well as a new link in <NavigationBar>
// This component should be a controlled form. Read the documentation to figure out which fields you will need. We will write the from submission handler later.
// first pull in out useState
import { useState } from "react";

function Register() {
    const [username, setUsername] = useState("");
    const [passwork, setPassword] = useState("");

    return (
        <>
            <h1>Create an Account</h1>
            <form>
                <label>
                    Username
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                <button>Register</button>
            </form>
        </>
    )
}