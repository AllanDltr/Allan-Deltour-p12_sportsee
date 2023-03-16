import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, BrowserRouter, RouterProvider} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"))
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: '/Home',
//     element: <App />,
//   },
//   {
//     path: "/user/:userId",
//     element: <App />,
//   },
//   {
//     path: "/user/:userId/activity",
//     element: <App />,
//   },
//   {
//     path: "/user/:userId/average-sessions",
//     element: <App />,
//   },
//   {
//     path: "/user/:userId/performance",
//     element: <App />,
//   },
//   {
//     path: "*",
//     element: <Error404/>,
//   }
// ])

root.render(
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>,
  <BrowserRouter>
    <App />
  </BrowserRouter>
)