//create a new <Register> component. Add a /register route tot he router in main.jsx, as well as a new link in <NavigationBar>
// This component should be a controlled form. Read the documentation to figure out which fields you will need. We will write the from submission handler later.
// first pull in out useState
import { useState } from "react";
//update "register" to send credentials via respective mutation when the form is submitted. is successful, navigate the user back to home page
//use "unwrap" to catch the error- otherwise the user will always be redirected
//at this point, the token should be stored in state and sessionStorage on a successful registration or login. Confirm this by looking at the Redux DevTools and your browser inspector
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "./authSlice";


function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [register] = useRegisterMutation();
    const tryRegister = async (event) => {
        event.preventDefault();
        const credentials = { username, password };
        try {
            await register(credentials).unwrap();
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    }

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