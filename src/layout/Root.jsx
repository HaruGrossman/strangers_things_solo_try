//create a <Root> component with an <Outlet>. This will serve as the main template from the app. Refactor the router in main.jsx so that the existing routes become the children of <Root>. 
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
//after creating NavigationBar.jsx import and add to Root function

function Root() {
    return (
        <>
            <NavigationBar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Root //now update main.jsx with this information