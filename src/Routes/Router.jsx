import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Resister from "../Pages/Resister";
import Login from "../Pages/Login";
import ChefRicepeDetails from "../Components/Chefs/ChefRicepeDetails";
import ErrorPage from "../Pages/ErrorPage";
import Blog from "../Pages/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/chefs')
            },
            {
                path: '/chef-recipes/:id',
                element: <ChefRicepeDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
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