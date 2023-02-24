import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Error from './pages/Error'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Home',
    element: <App />,
  },
  {
    path: "*",
    element: <Error />,
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  )