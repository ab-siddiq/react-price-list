import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AddProduct from "./components/AddProduct/AddProduct.jsx";
import BuyProduct from "./components/BuyProduct/BuyProduct";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Dealers from "./components/Dealers/Dealers";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PageLoading from "./components/PageLoading/PageLoading";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder.jsx";
import PriceList from "./components/PriceList/PriceList";
import Products from "./components/Products/Products.jsx";
import Register from "./components/Register/Register";
import PrivateRoutes from "./components/routes/PrivateRoutes.jsx";
import Users from "./components/Users/Users.jsx";
import "./index.css";
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
        element: <Products></Products>,
        loader: () => fetch("http://localhost:5000/products"),
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
        element: (
          <PrivateRoutes>
            <Dealers></Dealers>
          </PrivateRoutes>
        ),
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/placeOrder",
        element: (
          <PrivateRoutes>
            <PlaceOrder></PlaceOrder>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/users",
        element: <Users></Users>,
      },

      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
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
