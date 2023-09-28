import {useRoutes} from "react-router-dom";

import LoginPage from "../pages/loginPage";
import HomesList from "../components/HomesList";

const HomeRoutes = () => {

    const routes = useRoutes([
        {
            path:'/',
            element: <LoginPage/>
        },
        {
            path: '/homes',
            element: <HomesList/>
        },
    ])
    return routes
}

export default HomeRoutes