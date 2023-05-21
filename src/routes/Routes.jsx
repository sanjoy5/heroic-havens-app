import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Success from '../pages/Success';
import AllToys from '../pages/AllToys';
import MyToys from '../pages/MyToys';
import PrivateRoute from './PrivateRoute';
import AddToys from '../pages/AddToys';
import Blogs from '../pages/Blogs';
import ErrorPage from '../pages/ErrorPage';
import ToyDetails from '../pages/ToyDetails';
import UpdateToys from '../pages/UpdateToys';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://toy-marketplace-heroichavens-server.vercel.app/home-toys')
            },
            {
                path: "/all-toys",
                element: <AllToys></AllToys>,
                loader: () => fetch('https://toy-marketplace-heroichavens-server.vercel.app/all-toys')
            },
            {
                path: "/my-toys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
            },
            {
                path: "/add-toys",
                element: <PrivateRoute><AddToys></AddToys></PrivateRoute>,
            },
            {
                path: "/toys/:id",
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toy-marketplace-heroichavens-server.vercel.app/toys/${params.id}`)
            },
            {
                path: "/updatetoys/:id",
                element: <PrivateRoute><UpdateToys></UpdateToys></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toy-marketplace-heroichavens-server.vercel.app/updatetoys/${params.id}`)
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <Signup></Signup>,
            },
        ],
    },
    {
        path: "/success",
        element: <Success></Success>
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    },
]);

export default router;