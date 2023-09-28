import {useRoutes} from "react-router-dom";

import LoginPage from "../pages/loginPage";
import HouseList from "../components/HouseList";
import CurrentUserHouses from "../pages/currentUserPage";

const HouseRoutes = () => {

    const routes = useRoutes([
        {
            path:'/',
            element: <LoginPage/>
        },
        {
            path: '/houses',
            element: <HouseList/>
        },
        {
            path: '/my-houses',
            element: <CurrentUserHouses/>
        }
    ])
    return routes
}

export default HouseRoutes