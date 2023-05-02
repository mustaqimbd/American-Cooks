import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Resister from "../Pages/Resister";
import Login from "../Pages/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'resister',
                element: <Resister />
            },
            {
                path: 'login',
                element: <Login />
            }
        ]
    }
])
export default router;