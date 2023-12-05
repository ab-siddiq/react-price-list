import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import PriceList from "./components/PriceList/PriceList";
import Dealers from "./components/Dealers/Dealers";
import BuyProduct from "./components/BuyProduct/BuyProduct";
import PageLoading from "./components/PageLoading/PageLoading";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProviders from "./providers/AuthProviders";
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
        // element: <NotFound></NotFound>,
        element: <PageLoading></PageLoading>,
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
        loader: async ({ params }) => {
          try {
            const response = await fetch(`priceList.json`);
            if (!response.ok) {
              throw new Error("Network response was not ok.");
            }
            const data = await response.json();

            const filteredItem = data?.filter(
              (items) => items.id === Number(params.productID)
            );
            // console.log(filteredItem.legth)
            return filteredItem;
          } catch (error) {
            // console.error("Error fetching data:", error);
            return null; // Return null or handle the error as needed
          }
        },
      },
      {
        path: "/dealers",
        element: <Dealers></Dealers>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>
);
