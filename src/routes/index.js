import { lazy } from "react";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import DetailProduct from "../pages/User/DetailProduct";
import Home from "../pages/User/Home";
import Products from "../pages/User/Products";

const publicRoutes = [
  {
    path: "/",
    element: Home,
    exact: true,
  },
  {
    path: "/login",
    element: SignIn,
    exact: true,
    layout: null,
  },
  {
    path: "/register",
    element: SignUp,
    exact: true,
    layout: null,
  },
  {
    path: "/products",
    element: Products,
    exact: true,
  },
  {
    path: "/products/:id",
    element: DetailProduct,
    exact: true,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
