import React from "react";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.product_name.value;
    const productDescrition = form.product_description.value;
    const productCategory = form.product_category.value;
    const productPrice = form.product_price.value;
    const productInfo = {
      productName,
      productDescrition,
      productCategory,
      productPrice,
    };
    console.log(productInfo);
    // fetch("http://localhost:5000/addProduct", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(productInfo),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("data", data);
    //     if (data.insertedID) {
    //       alert("added");
    //     }
    //   });
    fetch('http://localhost:5000/addProduct', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(productInfo)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          alert('Users added successfully');
          form.reset();
        }
      })
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-2/3 flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleAddProduct} className="card-body">
            <h2 className="text-pink-600 text-2xl font-bold text-center -mt-5">
              Please add product info
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
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-pink-900 text-pink-100 font-bold">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
