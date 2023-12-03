import React from "react";
import { useLoaderData } from "react-router-dom";
import Dealer from "../Dealer/Dealer";

const Dealers = () => {
  const dealers = useLoaderData();
  return (
    <div className="p-4 ">
      <h2 className="bg-pink-600 text-center mb-4 sm:my-4 py-5 text-3xl font-bold text-pink-100 rounded-lg">
        Our Dealer List
      </h2>
      <div className="grid sm:grid-cols-4 gap-5 mt-10">
        {dealers.map((dealer) => (
          <Dealer key={dealer.id} dealer={dealer}></Dealer>
        ))}
      </div>
    </div>
  );
};

export default Dealers;
