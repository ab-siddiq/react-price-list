import React from "react";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-pink-200 rounded-lg p-4 text-pink-900">
      <h2 className="text-xl font-bold">{price.product}</h2>
      <p className="text-sm py-2">{price.description}</p>
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold">${price.price}</p>
        <p className="text-bold text-xs bg-pink-900 px-1 rounded text-pink-100">
          {price.category}
        </p>
      </div>
      <button className="bg-pink-900 text-purple-100  w-full rounded-lg mt-3 py-1 font-bold transform hover:scale-105 duration-700">
        Buy Now
      </button>
    </div>
  );
};

export default PriceCard;
