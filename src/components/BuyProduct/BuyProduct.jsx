import React, { useEffect, useState } from "react";
import { redirect, useLoaderData, useNavigate, useParams } from "react-router-dom";

const BuyProduct = () => {
  const [quantity, setQuantity] = useState(1);
  // const [currentPrice, setCurrentPrice] = useState(0);
  const getProduct= useLoaderData();
  console.log(getProduct)
  getProduct==null && redirect('/') 
  const [{ product, price, description, category }] = getProduct
  const [productPrice, setProductPrice] = useState(quantity * price);

  const priceCalculation = () => {
    let cprice = quantity * price;
    setProductPrice(cprice);
  };
  // setProductPrice()
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    priceCalculation();
  };
  const deccreaseQuantity = () => {
    setQuantity(quantity - 1);
    priceCalculation();
  };

  return (
    <div className="h-screen w-96 mx-auto mt-20">
      <div className="border-pink-900 border p-4 rounded-lg">
        {/* <p className="">{id}</p> */}
        <p className="text-xl font-bold">{product}</p>
        <p className="">Price: ${price}</p>
        <p className="">Type: {category}</p>
        <p className="">
          Details:
          <br /> {description}
        </p>
        <div className="flex items-center gap-2">
          <label htmlFor="">Quantity: </label>
          <div className="flex gap-3 my-2">
            <button
              disabled={quantity == 1 && true}
              onClick={deccreaseQuantity}
              className={`bg-pink-900 px-3 rounded-lg text-2xl font-bold flex ${
                quantity <= 1
                  ? "bg-pink-50 cursor-not-allowed"
                  : "cursor-pointer"
              } `}
            >
              -
            </button>
            <input
              className="rounded-lg px-2 py-1 w-16 content-center flex justify-center"
              value={quantity}
              type="number"
              name=""
              id=""
            />
            <button
              onClick={increaseQuantity}
              className="bg-pink-900 px-3 rounded-lg text-2xl font-bold flex "
            >
              +
            </button>
          </div>
        </div>
        <p className="">Sub Total: ${productPrice}</p>
      </div>
      <button className="bg-pink-900 text-pink-100 px-2 py-1 rounded-lg mt-2 w-full">
        Place Order
      </button>
    </div>
  );
};

export default BuyProduct;
