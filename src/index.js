import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Mockbee from "./Pages/MockBee/Mockbee";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Cart from "../src/Pages/Cart/Cart";
import Wishlist from "../src/Pages/WishList/WishList";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Auth from "./Auth/auth";
import Logout from "../src/Pages/LogOut/Logout"
import Account from "../src/Pages/Account/Account"
import Profile from "../src/Pages/Account/Component/Profile"
import Address from "../src/Pages/Account/Component/Address"
// Call make Server
makeServer();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/mockman", element: <Mockbee /> },
      { path: "/", element: <Home /> },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: (
          <Auth>
            <Cart />
          </Auth>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <Auth>
            <Wishlist />
          </Auth>
        ),
      },
      { path: "/wishlist/product-details/:id", element: <ProductDetails /> },
      { path: "/login", element: <Login /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/logout", element: <Logout /> },
      {
        path: "/account",
        element: <Account />,
        children: [
          { path: "profile", element: <Profile /> },
          { path: "address", element: <Address /> },
        ],
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
