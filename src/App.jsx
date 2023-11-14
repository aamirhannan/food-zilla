import React, { Children } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer.jsx'
import './index.css'

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'
import Cart from './components/Cart.jsx'
import RestaurantMenu from './components/RestaurantMenu.jsx'

const App = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<Error/>,

    children: [
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/contact",
        element:<Contact/>,

      },
      {
        path:"/cart",
        element:<Cart/>,

      },
      {
        path:"/restaurant/:recId",
        element:<RestaurantMenu/>
      },
    ]
  },
]);

export default App