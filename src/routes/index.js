import {useRoutes} from "react-router-dom";

import LoginPage from "../pages/loginPage";

const HomeRoutes = () => {

    const routes = useRoutes([
        {
            path:'/',
            element: <LoginPage/>
        },
    ])
    return routes
}

export default HomeRoutes