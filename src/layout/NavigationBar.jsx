//create a navigationBar component with a single link to /posts. This should be rendered inside <Root>

// update "NavigationBar" so that is shows the "register" and "login" links only if the user is not logged in. if the user is logged in, a "logout" button should be displayed instead if the user is logged in 
// a user is logged in if a token exists in state
// when clicked, the logout button should dispatch the "logout" action
// the user should be redirected to the home page after logging out
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, selectToken } from "../features/auth/authSlice";

function NavigationBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector(selectToken);

    const tryLogout = async () => {
        await dispatch(logout());
        navigate("/");
    };

    return (
        <nav>
            <h1>{"Stranger Things Solo Try"}</h1>
            <menu>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                {token ? (
                    <li>
                        <button onClick={tryLogout}>Logout</button>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </>
                )}

            </menu>
        </nav>
    );
}

export default NavigationBar // now add this to the Root.jsx and main.jsx