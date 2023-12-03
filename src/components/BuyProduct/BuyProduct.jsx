import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BuyProduct = () => {
  // const product = useParams()
  const product = useLoaderData()
  console.log('jj',product)
  return (
    <div>
      dd
    </div>
  );
};

export default BuyProduct;