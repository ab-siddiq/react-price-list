import React from "react";
import { useLoaderData } from "react-router-dom";
import { PencilIcon,TrashIcon } from "@heroicons/react/24/solid";

const Products = () => {
  const products = useLoaderData();
  const handleDelete= id =>{
    console.log(id)
    fetch(`http://localhost:5000/products/${id}`,{
      method: 'DELETE',

    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.deletedCount>0){
        alert('Deleted')
      }
    })
  }
  return (
    <div className="px-6 py-10 w-2/3 mx-auto h-screen">
      <div>
        <div className="overflow-x-auto">
          <table className="table bg-pink-900 text-pink-100">
            {/* head */}
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
            <tbody>
              {products.map((product, keys) => (
                <tr>
                  <th>{keys + 1}</th>
                  <td>{product._id}</td>
                  <td>{product.productName}</td>
                  <td>{product.productDescription}</td>
                  <td>{product.productCategory}</td>
                  <td>{product.productPrice}</td>
                  <td className="flex justify-start gap-2">
                    <button onClick={()=>handleDelete(product._id)}><PencilIcon className="h-5 w-5  text-green-600 " /></button>
                    <button onClick={()=>handleDelete(product._id)}><TrashIcon className="h-5 w-5 text-red-600" /></button>
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