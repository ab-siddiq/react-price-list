import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import PriceList from "./components/PriceList/PriceList";
import Dealers from "./components/Dealers/Dealers";
import BuyProduct from "./components/BuyProduct/BuyProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <PriceList></PriceList>,
      },
      {
        path: "/about",
        element: <NotFound></NotFound>,
      },
      {
        path: "/contact",
        element: <NotFound></NotFound>,
      },
      {
        path: "/services",
        element: <NotFound></NotFound>,
      },
      {
        path: "/products",
        element: <NotFound></NotFound>,
      },
      {
        path: "/purchase/:productID",
        element: <BuyProduct></BuyProduct>,
        loader: ({params}) => fetch(`priceList.json`)
      },
      {
        path: "/dealers",
        element: <Dealers></Dealers>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
