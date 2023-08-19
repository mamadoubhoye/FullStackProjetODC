import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Connexion from './pages/auth/Connexion';
import Inscription from './pages/auth/Inscription';
import Detail from './pages/detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    loader:()=>{
      const user = localStorage.getItem('user')
      const is_login = JSON.parse(user)?.token
      if(!is_login){
        return redirect('/connexion');
      }
      return null;
    }
  },
  {
    path: "/signin",
    element: <SignIn/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/inscription",
    element:<Inscription/>,
  },
  {
    path: "/connexion",
    element: <Connexion/> ,
  },
  {
    path: "/detail/:id",
    element: <Detail/> ,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

