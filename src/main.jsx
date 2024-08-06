import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import About from './about file/About';
import Research from './Research';
import Library from './Library';
import Science from './Science';
import Login from './firebase/Login';
import SignUp from './firebase/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
      },
      {
        path: "/about",
        element:    <About></About> ,
      },
      {
        path: "/re",
        element:  <Research></Research> ,
      },
      {
        path: "/li",
        element:   <Library></Library>  ,
      },
      {
        path: "/sci",
        element:  <Science></Science>  ,
      },
      {
        path: "/login",
        element:   <Login></Login>  ,
      },
      {
        path: "/up",
        element:  <SignUp></SignUp> ,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
