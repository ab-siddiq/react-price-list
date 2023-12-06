import React from "react";
import { useLoaderData } from "react-router-dom";
import Dealer from "../Dealer/Dealer";

const Dealers = () => {
  const dealers = useLoaderData();
  return (
    <div className="p-6 mb-10">
      <h2 className="text-pink-700 text-center mb-4 h-20 sm:h-32 md:48 flex justify-center items-center sm:my-4 py-5 text-4xl font-bold border-4 border-pink-900 shadow-pink-700 shadow-lg rounded-lg">
        Our Dealer List
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-10">
        {dealers.map((dealer) => (
          <Dealer key={dealer.id} dealer={dealer}></Dealer>
        ))}
      </div>
    </div>
  );
};

export default Dealers;
