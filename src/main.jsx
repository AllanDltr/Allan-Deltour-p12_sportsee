import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './pages/Home'
import Wip from './components/Wip'
import Error from './pages/Error'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'

const container = document.getElementById("root")
// Create a root.
const root = ReactDOM.createRoot(container)
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
  },
  {
    path: '/Home',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/Profile',
    element: <Wip />,
    errorElement: <Error />,
  },
  {
    path: '/Reglages',
    element: <Wip />,
    errorElement: <Error />,
  },
  {
    path: '/Communautes',
    element: <Wip />,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <Error />,
    errorElement: <Error />,
  }
])


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  )
