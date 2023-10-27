//create a navigationBar component with a single link to /posts. This should be rendered inside <Root>

import { Link } from "react-router-dom";

function NavigationBar() {
    return (
        <nav>
            <h1>{"Stranger Things Solo Try"}</h1>
            <menu>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </menu>
        </nav>
    );
}

export default NavigationBar // now add this to the Root.jsx and main.jsx