import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import "./styles/index.css";

import App from "./App.jsx";
import PageNotFound from "./page/PageNotFound.jsx";
import Dashboard from "./page/Dashboard.jsx";
import Inventory from "./page/Inventory.jsx";
import Orders from "./page/Orders.jsx";
import Users from "./page/Users.jsx";
import HomePage from "./page/HomePage.jsx";
import DetailOrder from "./feactures/Orders/DetailOrder.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      { path: "detail/:orderID", element: <DetailOrder /> },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
