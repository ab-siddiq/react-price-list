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
    <div className="p-2 ">
      <h2 className="bg-pink-900 text-center mb-4 sm:my-4 py-5 text-3xl font-bold text-pink-100 rounded-lg">
        Our Price List
      </h2>
      <div className="grid sm:grid-cols-4 gap-4 mb-4">
        {products.map((product) => (
          <PriceCard key={product.id} product={product}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
