import {useRoutes} from "react-router-dom";

import LoginPage from "../pages/loginPage";
import HouseList from "../components/HouseList";

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
    ])
    return routes
}

export default HouseRoutes