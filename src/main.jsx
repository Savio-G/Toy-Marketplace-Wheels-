import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import AllToys from './Components/PageComponents/AllToys.jsx';
import MyToys from './Components/PageComponents/MyToys.jsx';
import AddaToy from './Components/PageComponents/AddaToy.jsx';
import Login from './Authentication/Login.jsx';
import Register from './Authentication/Register.jsx';
import HomeLayout from './Layouts/HomeLayout.jsx';
import MainLayout from './Layouts/MainLayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
    ]
  },
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "Alltoys",
        element: <AllToys></AllToys>
      },
      {
        path: "/Mytoys",
        element: <MyToys></MyToys>
      },
      {
        path: "/Addatoy",
        element: <AddaToy></AddaToy>
      },
      {
        path: "/Login",
        element: <Login></Login>
      },
      {
        path: "/Register",
        element: <Register></Register>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,

)
