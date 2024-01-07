import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Update = () => {
  const loadedProducts = useLoaderData();
  const navigate = useNavigate();
  console.log(loadedProducts);
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.product_name.value;
    const productDescription = form.product_description.value;
    const productCategory = form.product_category.value;
    const productPrice = form.product_price.value;
    const updatedProductInfo = {
      productName,
      productDescription,
      productCategory,
      productPrice,
    };
    fetch(
      `https://react-price-list-server.vercel.app/products/${loadedProducts._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedProductInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.modifiedCount > 0 && alert("Updated");
        navigate("/products");
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-2/3 flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleUpdateProduct} className="card-body">
            <h2 className="text-pink-600 text-2xl font-bold text-center -mt-5">
              Please update product info
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                placehoৢৢৢlder="product name"
                name="product_name"
                className="input input-bordered"
                defaultValue={loadedProducts?.productName}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="texarea"
                placeholder="description"
                name="product_description"
                className="input input-bordered h-24 flex items-start py-2"
                defaultValue={loadedProducts?.productDescription}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                placeholder="category"
                name="product_category"
                className="input input-bordered"
                defaultValue={loadedProducts?.productCategory}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="price"
                name="product_price"
                className="input input-bordered"
                defaultValue={loadedProducts?.productPrice}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-pink-900 text-pink-100 font-bold">
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
