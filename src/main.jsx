import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "postcss";
import ErrorElement from "./components/ErrorElement/ErrorElement";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/about",
    element: <Root/>,
    errorElement: <ErrorElement></ErrorElement>,
  },
  {
    path: "/contact",
    element: <Root/>,
    errorElement: <ErrorElement></ErrorElement>,
  },
  {
    path: "/services",
    element: <Root/>,
    errorElement: <ErrorElement></ErrorElement>,
  },
  {
    path: "/products",
    element: <Root/>,
    errorElement: <ErrorElement></ErrorElement>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
