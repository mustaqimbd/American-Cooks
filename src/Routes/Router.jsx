import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Resister from "../Pages/Resister";
import Login from "../Pages/Login";
import ChefRicepeDetails from "../Pages/ChefRicepeDetails";
import ErrorPage from "../Pages/ErrorPage";
import Blog from "../Pages/Blog";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://recipe-world-server-zeta.vercel.app/chefs')
            },
            {
                path: '/chef-recipes/:id',
                element: <ProtectedRoute><ChefRicepeDetails /></ProtectedRoute>,
                loader: ({ params }) => fetch(`https://recipe-world-server-zeta.vercel.app/chefs/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog />
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