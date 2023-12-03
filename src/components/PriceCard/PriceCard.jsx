import React from "react";
import { Link } from "react-router-dom";

const productCard = ({ product }) => {
  return (
    <div className="bg-pink-200 rounded-lg p-4 text-pink-900 border-pink-900 border-2">
      <h2 className="text-xl font-bold">{product.product}</h2>
      <p className="text-sm py-2">{product.description}</p>
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold">${product.product}</p>
        <p className="text-bold text-xs bg-pink-900 px-1 rounded text-pink-100">
          {product.category}
        </p>
      </div>
      <Link to={`/purchase/${product.id}`}>
        <button className="bg-pink-900 text-purple-100  w-full rounded-lg mt-3 py-1 font-bold transform hover:scale-105 duration-700">
          Buy Now
        </button>
      </Link>
    </div>
  );
};

export default productCard;
