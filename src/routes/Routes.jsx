import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import ToyDetails from "../pages/ToyDetails";
import MyToys from "../pages/MyToys";
import AddToy from "../pages/AddToy";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import AllToys from "../pages/AllToys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('http://localhost:5000/allToys/')
            },

            {
                path: "all-toys",
                element: <AllToys></AllToys>,
                loader: () => fetch('http://localhost:5000/allToys/')
            },
            {
                path: "blog",
                element: <Blog />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: 'toy-details/:id',
                element: <PrivateRoute><ToyDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/singleToy/${params.id}`)
            },
            {
                path: 'my-toys',
                element: <PrivateRoute> <MyToys /> </PrivateRoute>,

            },
            {
                path: 'add-toys',
                element: <PrivateRoute><AddToy /></PrivateRoute>,

            },
        ],
    },
    // {
    //     path: "/",
    //     element: <HomeLayout />,
    //     errorElement: <ErrorPage />,
    //     children: [
    //         {
    //             path: 'toy-details/:id',
    //             element: <PrivateRoute><ToyDetails /></PrivateRoute>,
    //             loader: ({ params }) => fetch(`http://localhost:5000/singleToy/${params.id}`)
    //         },
    //         {
    //             path: 'my-toys',
    //             element: <PrivateRoute> <MyToys /> </PrivateRoute>,
    //             loader: ({ params }) => fetch(`http://localhost:5000/singleToy/${params.id}`)
    //         },
    //         {
    //             path: 'add-toy',
    //             element: <PrivateRoute><AddToy /></PrivateRoute>,

    //         },
    //     ]
    // },
]);

export default router;