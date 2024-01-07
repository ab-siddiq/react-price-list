import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Products = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://react-price-list-server.vercel.app/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted");
          const remainingProducts = products.filter(
            (product) => product._id !== id
          );
          setProducts(remainingProducts);
        }
      });
  };
  const handleUpdate = (id) => {
    console.log(id);
  };
  return (
    <div className="px-6 py-10 mb-10 w-2/3 mx-auto h-screen">
      <div>
        <div className="text-right mb-4">
          <Link to="/addProduct">
            <button className="bg-pink-900 text-pink-200 px-4 py-1 text-xl font-bold rounded-lg">
              Add Product
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table bg-pink-900 text-pink-100 ">
            {/* head */}
            {products.length > 0 ? (
              <thead className="text-pink-100">
                <tr>
                  <th>SL</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
            ) : (
              <p className="text-center py-2 font-bold text-2xl">
                No Data Exists!!!
              </p>
            )}
            <tbody>
              {products.map((product, keys) => (
                <tr key={product._id}>
                  <th>{keys + 1}</th>
                  <td>{product._id}</td>
                  <td>{product.productName}</td>
                  <td>{product.productDescription}</td>
                  <td>{product.productCategory}</td>
                  <td>{product.productPrice}</td>
                  <td className="flex justify-start  gap-2">
                    <Link to={`/update/${product._id}`}>
                      <button onClick={() => handleUpdate(product._id)}>
                        <PencilIcon className="h-5 w-5  text-green-600 " />
                      </button>
                    </Link>
                    <div className="border-r-2  border-pink-100"></div>
                    <button onClick={() => handleDelete(product._id)}>
                      <TrashIcon className="h-5 w-5 text-red-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
