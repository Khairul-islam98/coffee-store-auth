import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import App from '../App';
import AddCoffee from '../components/AddCoffee';
import UpdateCoffee from '../components/UpdateCoffee';
import Signup from '../components/Signup/Signup';
import SignIn from '../components/SignIn/SignIn';
import Users from '../components/Users';


const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <App></App>,
                loader: () => fetch('https://coffee-store-server-livid.vercel.app/coffee')
              },
              {
                path: "/addcoffee",
                element: <AddCoffee></AddCoffee>,
              },
              {
                path: "/updatecoffee/:id",
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({params}) => fetch(`https://coffee-store-server-livid.vercel.app/coffee/${params.id}`)
              },
              {
                path: "/signup",
                element: <Signup></Signup>,
              },
              {
                path: '/signin',
                element: <SignIn></SignIn>,
              },
              {
                path: "/users",
                element: <Users></Users>,
                loader: () => fetch('https://coffee-store-server-livid.vercel.app/user')
              }
        ]
    }
])


export default Route;