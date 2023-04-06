import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import Page404 from "../../Pages/Shared/404/Page404";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import Categories from "../../Pages/Categories/Categories";
import axios from "axios";
import Companies from "../../Pages/Companies/Companies";
import Blogs from "../../Pages/Bolgs/Blogs";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs/category/:categoryName",
        loader: async ({params}) => await fetch(`http://localhost:5000/jobs/category/${params.categoryName}`),
        element: <Categories></Categories>,
      },
      // path: "/project/details/:_id",
      // loader: async ({params}) => {
      //   return await fetch(`https://portfolio-rakibul-islam.vercel.app/project/details/${params._id}`)
      // },
      {
        path: "/companies",
        element: <Companies></Companies>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "*",
        element: <Page404></Page404>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      }
    ],
  },
]);