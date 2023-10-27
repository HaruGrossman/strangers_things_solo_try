//create a <Root> component with an <Outlet>. This will serve as the main template from the app. Refactor the router in main.jsx so that the existing routes become the children of <Root>. 
import { Outlet } from "react-router-dom";

function Root() {
    return (
        <main>
            <Outlet />
        </main>
    )
}

export default Root //now update main.jsx with this information