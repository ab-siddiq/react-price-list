import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BuyProduct = () => {
  const [quantity,setQuantity] = useState(1)
  const [{ product, price, description, category }] = useLoaderData();
  // console.log(p)
  const increaseQuantity = () =>{
    setQuantity(quantity+1)
  }
  const deccreaseQuantity = () =>{
    if(quantity===1) {}
    setQuantity(quantity-1)
  }

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
          <div className="flex gap-3">
          <button disabled={quantity==1 && true}  onClick={deccreaseQuantity} className={`bg-pink-900 px-3 rounded-lg text-2xl font-bold flex ${quantity<=1 ? 'bg-pink-50 cursor-not-allowed': 'cursor-pointer'} `}>-</button>
          <input className="rounded-lg px-2 py-1 w-16 content-center flex justify-center"  value={quantity} type="number" name="" id="" />
          <button onClick={increaseQuantity}  className="bg-pink-900 px-3 rounded-lg text-2xl font-bold flex ">+</button>
          </div>
        </div>
      </div>
      <button className="bg-pink-900 text-pink-100 px-2 py-1 rounded-lg mt-2 w-full">
        Place Order
      </button>
    </div>
  );
};

export default BuyProduct;
