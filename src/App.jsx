import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from './pages.jsx/HomeLayout'
import Requests from './pages.jsx/Requests'
import Events from './pages.jsx/Events'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Requests />
      },
      {
        path: "events",
        element: <Events />
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App