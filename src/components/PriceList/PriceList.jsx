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
      <h2 className="bg-pink-900 text-center mb-4 sm:my-4 h-20 sm:h-32 md:48 flex items-center justify-center text-3xl font-bold text-pink-100 rounded-xl">
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
