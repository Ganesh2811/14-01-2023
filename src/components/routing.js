import {
    createBrowserRouter,
  } from "react-router-dom";
import About from "./About";
import Content from "./Content";
import Service from "./Service";
import Product from "./Product";
import App from "./App";
import Usermark from "./Usermark";

  const router= createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            {
                path:'',
                element: <Content />
            },
            {
                path:'about',
                element: <About />
            },
            {
                path:'usermark',
                element: <Usermark />
            },
            {
                path:'service',
                element: <Service />
            },
            {
                path:'product',
                element: <Product />
            }
        ]
    }
  ]);
  
  export default router