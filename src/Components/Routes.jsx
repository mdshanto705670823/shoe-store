import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import Home from './Layouts/Home'
import Blog from './Layouts/Blog'
import About from './Layouts/About'
import Contact from './Layouts/Contact'
import Details from './Layouts/Details'
import CartItems from './Layouts/CartItems'
import WishList from './Layouts/WishList'
import Login from './Layouts/Login'
import PrivateRoute from './PrivateRoute'
import Dashboard from './Layouts/Dashboard'
import SingleBlog from './Layouts/SingleBlog'
import TotalProducts from './Layouts/TotalProducts'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/product/:id",
                element: <Details/>
            },
            {
                path: "/cart",
                element: <CartItems/>
            },
            {
                path: "/wish",
                element: <WishList/>
            },
            {
                path: "/dashboard",
                element:(
                    <PrivateRoute>
                        <Dashboard/>
                    </PrivateRoute>
                )
            },
            {
                path:"/totalProducts",
                element: <PrivateRoute>
                    <TotalProducts/>
                </PrivateRoute>
            },
            {
                path: "/blog/:id",
                element: <SingleBlog/>
            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    }
])


export default router
