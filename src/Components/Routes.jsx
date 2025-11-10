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
            }
        ]
    }
])
const Routes = () => {
  return (
    <div>
      
    </div>
  )
}

export default router
