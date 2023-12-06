import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";
const PriceList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("priceList.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-6 ">
      <h2 className="text-pink-700 text-center mb-4 sm:my-4 h-20 sm:h-32 md:48 flex items-center justify-center text-4xl font-bold border-4 border-pink-900 shadow-lg shadow-pink-700 rounded-xl">
        Our Price List
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 mb-10">
        {products.map((product) => (
          <PriceCard key={product.id} product={product}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
