import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";
const PriceList = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch("priceList.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);

  return (
    <div className="p-2 bg-pink-200">
      <h2 className="bg-pink-600 text-center mb-4 sm:my-4 py-5 text-3xl font-bold text-pink-100 rounded-lg">
        Our Price List
      </h2>
      <div className="grid sm:grid-cols-4 gap-4 mb-4">
        {prices.map((price) => (
          <PriceCard key={price.id} price={price}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
