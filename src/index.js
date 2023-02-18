import ReactDOM  from "react-dom/client";
import App from "./component/App";

// import './index.css';
import Usermark from "./component/Api";
import HighchartsReact from "highcharts-react-official";
import {
    createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./component/Footer";
import Header from './component/Header';
import Home from "./component/Home";
import Mark from "./component/Mark";
import Marks from "./component/Marks";
import Product from "./component/Product";
import About from "./component/About";
import Single from "./component/Single";
import Filterpro from './component/Filterpro'
  const router1 =  createBrowserRouter([
    {

    path: "/",
    element: <App/>,
    children :[
       {
            path: "Header",
            element: <Header/>
        },
        {
          path: "Usermark",
          element: <Usermark/>
      },
        {
          path: "footer",
          element: <Footer/>
      },
      {
        path: "mark",
        element: <Mark/>
    },
    {
      path: "marks",
      element: <Marks/>
  },
  {
    path: "product",
    element: <Product/>
},
{
  path: "Home",
  element: <Home/>
},
{
  path: "about",
  element: <About/>
},
{
  path: "single/:productId",
  element: <Single/>
},
{
  path: "filter-product",
  element: <Filterpro/>
}


      
    ]

  }])

  const root =ReactDOM.createRoot(document.getElementById('root'));
  root.render(<RouterProvider router={router1}/>)

// db.users.insertMany([ {name:'mehul',age:22,place:'mumbai'},
// {name:'shubham',age:22,place:'mumbai'},
// {name:'ram',age:22,place:'mumbai'},
// {name:'shiv',age:23,place:'mumbai'},
// {name:'sita',age:24,place:'mumbai'},
// {name:'akshay',age:24,place:'mumbai'},
// {name:'abhi',age:25,place:'mumbai'},
// {name:'rahul',age:26,place:'mumbai'},
// {name:'ganesh',age:25,place:'mumbai'},
// {name:'vishal',age:26,place:'mumbai'},
// {name:'sham',age:27,place:'mumbai'},
// {name:'tanvi',age:32,place:'mumbai'},
// {name:'mahesh',age:42,place:'mumbai'},
// {name:'mahesh',age:42,place:'mumbai'},
// {name:'raj',age:52,place:'mumbai'},
// {name:'raju',age:62,place:'mumbai'}])
