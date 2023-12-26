import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import App from './App';
import Error from "./Pages/Error"
import Body from './Components/Body';
import Offers from './Pages/Offers';
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Cart from './Pages/Cart';
import SignUp from './Pages/SignUp';
import Restaurant from "./Pages/Restaurant";
import Login from './Pages/Login';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/offers",
        element:<Offers/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
         path:"/login",
         element:<Login/>
      },
      {
         path:"/signup",
         element:<SignUp/>
      },
      {
        path: "/restaurant/:resId",
        element:<Restaurant/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={appRouter} />
);
